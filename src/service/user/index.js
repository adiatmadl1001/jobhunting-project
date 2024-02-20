import axios from "axios"
import { register_path, signin_path } from "../path"

export const serviceRegister = async (payload) => {
  return await axios
    .post(register_path, payload)
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err))
}

export const serviceSignin = async (payload) => {
  return await axios
    .post(signin_path, payload)
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err))
}
