import { serviceRegister } from "@/service/user"

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
