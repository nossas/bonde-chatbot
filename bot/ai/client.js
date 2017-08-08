import { Wit, log } from 'node-wit'

export default () => new Wit({
  accessToken: process.env.WIT_SERVER_ACCESS_TOKEN,
  logger: new log.Logger(log.DEBUG)
})
