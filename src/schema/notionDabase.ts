import { z } from 'zod'

const NOTION_DATABASE_BODY = z.object({
  id: z.string(),
})

const NOTION_DATABASE = z.object({
  id: z.string(),
  frenchWord: z.string(),
  deutshWord: z.string(),
})

const NOTION_DATABASE_LIST = z.array(NOTION_DATABASE)

const API_RESPONSE = z.object({
  databaseId: z.string(),
  value: z.array(NOTION_DATABASE),
})

export type TNotionDatabaseBody = z.infer<typeof NOTION_DATABASE_BODY>
export type TNotionDatabase = z.infer<typeof NOTION_DATABASE>
export type TNotionDatabaseList = z.infer<typeof NOTION_DATABASE_LIST>
export type TApiResponse = z.infer<typeof API_RESPONSE>

export { NOTION_DATABASE_BODY, NOTION_DATABASE, NOTION_DATABASE_LIST, API_RESPONSE }
