import { Visibility } from '@prisma/client'

type ICldColors = [string, number]
export interface CldImageResponse {
  public_id: string
  version: number
  width: number
  height: number
  format: string
  created_at: string
  bytes: number
  url: string
  secure_url: string
  colors: ICldColors[]
}

export interface ITransformFormData {
  title: string
  transformationType: string
  visibility: Visibility
  publicId: string
  tags: string
  authorEditor: string
  author: number
  image: File
}
