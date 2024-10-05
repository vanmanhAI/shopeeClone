import axios, { AxiosError, HttpStatusCode } from 'axios'

export const isAxiosError = <T>(error: unknown): error is AxiosError<T> => {
  return axios.isAxiosError(error)
}

export const isUnprocessableEntityAxiosError = <T>(error: unknown): error is AxiosError<T> => {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

export const formatNumberToSocialStyle = (number: number, maximumFractionDigits = 1) => {
  const result = new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits
  })
    .format(number)
    .replace('M', 'tr')
    .replace('.', ',')
    .toLowerCase()

  return result
}

export const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')

export const genNameId = ({ name, id }: { name: string; id: string }) => {
  return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i-${id}`
}

export const getIdFromNameId = (nameId: string) => {
  const arr = nameId.split('-i-')
  return arr[arr.length - 1]
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0
  })
}
