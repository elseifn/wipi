import { ITag } from '../tag/tag.interface'

enum Status {
  draft = 'draft',
  puplish = 'publish',
}

export interface IToc {
  level: number
  anchor: string
  title: string
}

export interface IArticle {
  id: string
  title: string // 标题
  summary: string // 摘要
  content: string // 内容（前端编辑器定为: markdown 格式）
  cover: string // 封面（图片地址）
  html: string // HTML 内容
  toc: IToc[] // 目录
  tags: ITag[] // 标签
  status: Status // 状态
  views: number // 阅读量
  publishAt: Date
  createAt: Date
  updateAt: Date
}