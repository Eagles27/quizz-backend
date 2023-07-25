import getDatabaseHandler from '@/handlers/getDatabaseHandler'
import { NOTION_DATABASE_BODY, NOTION_DATABASE_LIST } from '@/schema/notionDabase'
import { FastifyPluginAsync, FastifySchema } from 'fastify'

const schema: FastifySchema = {
  body: NOTION_DATABASE_BODY,
  response: {
    200: NOTION_DATABASE_LIST,
  },
  tags: ['Notion'],
}

const getDatabase: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post('/database', { schema }, getDatabaseHandler)
}
export default getDatabase
