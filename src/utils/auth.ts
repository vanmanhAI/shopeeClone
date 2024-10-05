import { User } from '@/types/user.type'

export const setAccessTokenToLS = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken)
}

export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
}

export const getAccessTokenFromLS = () => {
  return localStorage.getItem('access_token') || ''
}

export const getProfileFromLS = () => {
  const profile = localStorage.getItem('profile')
  return profile ? JSON.parse(profile) : null
}

export const setProfileToLS = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}

export const getCheckedPurchaseIdsFormLS = (): string[] => {
  return JSON.parse(localStorage.getItem('checkedPurchases') || '[]')
}

export const setCheckedPurchaseIdsToLS = (ids: string[]) => {
  localStorage.setItem('checkedPurchases', JSON.stringify(ids))
}

export const toggleCheckedPurchaseId = (id: string, isChecked: boolean) => {
  const checkedPurchases = getCheckedPurchaseIdsFormLS()
  const index = checkedPurchases.indexOf(id)
  if (isChecked && index === -1) {
    checkedPurchases.push(id)
  } else if (!isChecked && index > -1) {
    checkedPurchases.splice(index, 1)
  }
  localStorage.setItem('checkedPurchases', JSON.stringify(checkedPurchases))
}

export const toggleCheckedPurchaseAllToLS = (ids: string[], isAllChecked: boolean) => {
  if (!isAllChecked) {
    localStorage.setItem('checkedPurchases', JSON.stringify(ids))
  } else {
    localStorage.setItem('checkedPurchases', '[]')
  }
}

export const clearCheckedPurchaseIdsFromLS = () => {
  localStorage.removeItem('checkedPurchases')
}
