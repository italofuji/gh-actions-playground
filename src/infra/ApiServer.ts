export interface ApiServer {
  on(method: string, url: string, callback: (params: Record<string, any>, body: Record<string, any>) => void): void
  listen(port: number): void
}
