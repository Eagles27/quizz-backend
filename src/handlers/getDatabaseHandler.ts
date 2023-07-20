import NotionService from '@/services/notion'
import { FastifyReply, FastifyRequest } from 'fastify'

const getDatabaseHandler = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const response = await NotionService.getDatabase()
    res.code(200).send(response)
  } catch (error) {
    res.badRequest('An error occured while fetching the database')
  }
}

export default getDatabaseHandler
