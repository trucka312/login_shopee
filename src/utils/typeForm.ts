export interface loginReqBody {
  emailOrUsernameOrPhoneNumber: string
  password: string
}

export interface registerReqBody {
  phone: string
}

export function isVietnamesePhoneNumber(phone: string) {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(phone);
}