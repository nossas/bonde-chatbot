import { Wit, log } from 'node-wit'

export default (witServerAccessToken) => new Wit({
  accessToken: witServerAccessToken,
  logger: new log.Logger(log.DEBUG)
})
