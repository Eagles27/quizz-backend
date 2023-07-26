import getDatabaseHandler from '@/handlers/getDatabaseHandler'
import { API_RESPONSE, NOTION_DATABASE_BODY } from '@/schema/notionDabase'
import { FastifyPluginAsync, FastifySchema } from 'fastify'

const schema: FastifySchema = {
  body: NOTION_DATABASE_BODY,
  response: {
    200: API_RESPONSE,
  },
  tags: ['Notion'],
}

const getDatabase: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post('/database', { schema }, getDatabaseHandler)
}
export default getDatabase
