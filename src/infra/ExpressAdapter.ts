import express, { Express, Response, Request,  } from 'express'

import { ApiServer } from './ApiServer'

export default class ExpressAdapter implements ApiServer {
  private app: Express

  constructor() {
    this.app = express()
    this.app.use(express.json())
  }

  on(method: 'get' | 'post', url: string, callback: (params: Record<string, any>, body: Record<string, any>) => void): void {
    this.app[method](url, async (request: Request, response: Response) => {
      const output = await callback(request.params, request.body)
      response.json(output)
    })
  }

  listen(port: number): void {
    this.app.listen(port)
  }
}
