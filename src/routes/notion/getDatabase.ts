import getDatabaseHandler from '@/handlers/getDatabaseHandler'
import { NOTION_DATABASE_LIST } from '@/schema/notionDabase'
import { FastifyPluginAsync, FastifySchema } from 'fastify'

const schema: FastifySchema = {
  response: {
    200: NOTION_DATABASE_LIST,
  },
  tags: ['Notion'],
}

const getDatabase: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/database', { schema }, getDatabaseHandler)
}
export default getDatabase
