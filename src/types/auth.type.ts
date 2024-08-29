import { User } from './user.type'
import { SuccessResponse } from './utils.type'

export type AuthResponse = SuccessResponse<{
  access_token: string
  expires: string
  refresh_token: string
  expires_refresh_token: string
  user: User
}>
