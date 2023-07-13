import fastify, { FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'
import envConfig from './configs/envConfig'
import appConfigPlugin from './appConfig'
import loggerConfig from './configs/loggerConfig'

const instance: FastifyInstance = fastify({
  logger: loggerConfig[envConfig.NODE_ENV],
})

async function start(): Promise<void> {
  try {
    const port = envConfig.PORT || 5000
    const host = '0.0.0.0'
    instance.listen({ port, host })
    instance.register(fp(appConfigPlugin), {})
  } catch (err) {
    instance.log.error(err)
  }
}

start()
