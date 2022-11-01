type RequestBody<T> = Request

export interface LoginBody {
  email: string,
  password: string,
}

export interface UserEntry {
  name: string,
  email: string,
  password: string,
  createdAt: Date,
}