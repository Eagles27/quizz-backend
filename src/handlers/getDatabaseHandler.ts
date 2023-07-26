import { TNotionDatabaseBody } from '@/schema/notionDabase'
import NotionService from '@/services/notion'
import { FastifyReply, FastifyRequest } from 'fastify'

type TRequest = FastifyRequest<{
  Body: TNotionDatabaseBody
}>

const getDatabaseHandler = async (req: TRequest, res: FastifyReply) => {
  const { id } = req.body
  try {
    const response = await NotionService.getDatabase(id)
    const finalResponse = {
      databaseId: id,
      value: response,
    }
    res.code(200).send(finalResponse)
  } catch (error) {
    res.badRequest('An error occurred while fetching the database')
  }
}

export default getDatabaseHandler
