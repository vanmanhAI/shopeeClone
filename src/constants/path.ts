const path = {
  home: '/',
  register: '/register',
  login: '/login',
  logout: '/logout',
  productDetail: ':id',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  profile: 'profile',
  changePassword: '/change-password',
  changeEmail: '/change-email',
  changePhone: '/change-phone',
  changeName: '/change-name',
  changeAvatar: '/change-avatar',
  changeAddress: '/change-address',
  changeBirthday: '/change-birthday'
} as const

export default path
