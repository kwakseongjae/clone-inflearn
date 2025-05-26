export interface Course {
  id: string
  title: string
  instructor: string
  thumbnail: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  studentCount: number
  tags: string[]
  isNew?: boolean
  isUpdated?: boolean
  isFree?: boolean
  discountRate?: number
  description: string
  learningPoints: string[]
  lastUpdated: string
}
