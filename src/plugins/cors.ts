import fp from 'fastify-plugin'
import cors from '@fastify/cors'
import { FastifyRequest } from 'fastify/types/request'
import envConfig from '../configs/envConfig'

export default fp(async (fastify) => {
  fastify.register(cors, () => (req: FastifyRequest, callback: any) => {
    const corsOptions = {
      origin: envConfig.NODE_ENV === 'dev' || envConfig.NODE_ENV === 'local',
    }

    // callback expects two parameters: error and options
    callback(null, corsOptions)
  })
})
