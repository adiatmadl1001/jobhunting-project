import axios from "axios"
import { profile_path, register_path, signin_path } from "../path"

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
export const serviceGetUser = async (payload) => {
  const token = localStorage.getItem("token")

  return await axios
    .post(
      profile_path,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err))
}
