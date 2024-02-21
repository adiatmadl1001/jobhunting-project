import { serviceRegister, serviceSignin } from "@/service/user"

export const actionRegister = (payload) => async (dispatch) => {
  dispatch({
    type: "user_loading",
    payload: {
      loading: true,
    },
  })

  const { data } = await serviceRegister(payload)

  dispatch({
    type: "user_register",
    payload: {
      loading: false,
    },
  })
  return data
}

export const actionSignin = (payload) => async (dispatch) => {
  dispatch({
    type: "user_loading",
    payload: {
      loading: true,
    },
  })

  const { data } = await serviceSignin(payload)
  if (data.success) localStorage.setItem("token", data.token)

  dispatch({
    type: "user_signin",
    payload: {
      loading: false,
      authenticate: data.success,
    },
  })
  return data
}
