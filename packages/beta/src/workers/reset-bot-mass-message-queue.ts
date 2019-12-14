import dotenv from 'dotenv'
import * as apm from 'elastic-apm-node'

const Redis = require('ioredis')
dotenv.config()
apm.start({ active: process.env.NODE_ENV === 'production' })

const myArgs = process.argv.slice(2)
const redisKey = typeof myArgs[0] !== 'undefined' ? myArgs[0].split('=') : ''
const redisDelete = typeof myArgs[1] !== 'undefined' ? myArgs[1].split('=') : ''
const redisKeyValue = redisKey[1]
const redisDeleteValue = redisDelete[1]

// https://github.com/NodeRedis/node_redis/issues/1314
// console.log('myArgs: ', myArgs)
// console.log('redisKey: ', myArgs[0].split('=')[0], redisKey)
// console.log('redisDelete: ', myArgs[1].split('=')[0], redisDelete)

const redis = new Redis(process.env.REDIS_URL)

const getKeysByPattern = (key) => {
  return new Promise((resolve, reject) => {
    var stream = redis.scanStream({
      // only returns keys following the pattern of 'key'
      match: key,
      // returns approximately 100 elements per call
      count: 1000
    })

    const keys: any[] = []
    stream.on('data', function (resultKeys) {
      console.log('reading', resultKeys.length)
      // `resultKeys` is an array of strings representing key names
      for (var i = 0; i < resultKeys.length; i++) {
        keys.push(resultKeys[i])
      }
    })
    stream.on('end', function () {
      resolve(keys)
    })
  })
}

const batchDeletionKeysByPattern = (key) => {
  var stream = redis.scanStream({
    // only returns keys following the pattern of 'key'
    match: key,
    // returns approximately 100 elements per call
    count: 100
  })

  stream.on('data', function (resultKeys) {
    if (resultKeys.length) {
      console.log('removing', resultKeys.length)
      redis.unlink(resultKeys)
    }
  })
}

if (redisKey[0] === '--redisKey' && redisKeyValue) {
  getKeysByPattern(redisKeyValue)
} else {
  console.log('Using default redis key: bull:bot-mass-message:*')
  getKeysByPattern('bull:bot-mass-message:*')
}
if (redisDelete[0] === '--redisDelete' && redisDeleteValue) {
  setTimeout(() => {
    if (redisDeleteValue.length > 0) {
      console.log('trying to remove')
      batchDeletionKeysByPattern(redisKeyValue)
    }
  }, 10000)
}

// key example 'prefix*'
// function deleteKeysByPattern (key) {
//   var stream = redis.scanStream({
//     // only returns keys following the pattern of 'key'
//     match: key,
//     // returns approximately 100 elements per call
//     count: 100
//   })

//   var keys = []
//   stream.on('data', function (resultKeys) {
//     // `resultKeys` is an array of strings representing key names
//     for (var i = 0; i < resultKeys.length; i++) {
//       keys.push(resultKeys[i])
//     }
//   })
//   stream.on('end', function () {
//     redis.unlink(keys)
//   })
// }
