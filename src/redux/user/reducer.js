const initialState = {
  loading: false,
  isAuthenticate: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user_loading":
      return {
        ...state,
        loading: action.payload.loading,
      }
    case "user_register":
      return {
        ...state,
        loading: action.payload.loading,
      }
    case "user_signin":
      return {
        ...state,
        loading: action.payload.loading,
        isAuthenticate: action.payload.authenticate,
      }
    default:
      return state
  }
}
