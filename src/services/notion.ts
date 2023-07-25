import envConfig from '@/configs/envConfig'
import { TNotionDatabaseList } from '@/schema/notionDabase'
import getLogger from '@/utils/logger'
import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

class NotionService {
  private static logger = getLogger('Notion Service')

  private static client = new Client({
    auth: envConfig.NOTION_KEY,
  })

  public static async getDatabase(id: string): Promise<TNotionDatabaseList> {
    try {
      const response = await this.client.databases.query({
        database_id: id,
      })

      const results = response.results.filter((page): page is PageObjectResponse => 'properties' in page)

      const words: TNotionDatabaseList = results.map((page: any) => ({
        id: page.id,
        frenchWord: page.properties.Franzosisch.rich_text[0].text.content.trim(),
        deutshWord: page.properties.Deutsch.title[0].text.content.trim(),
      }))

      return words
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }
}

export default NotionService
