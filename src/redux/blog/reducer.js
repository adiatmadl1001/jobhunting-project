const initialState = {
  loading: false,
  blog: [],
  blogDetail: {},
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "blog_loading":
      return {
        ...state,
        loading: action.payload.loading,
      }
    case "blog_success":
      return {
        ...state,
        blog: action.payload.blog,
        loading: action.payload.loading,
      }
    case "blog_detail_success":
      return {
        ...state,
        blogDetail: action.payload.blogDetail,
        loading: action.payload.loading,
      }

    default:
      return state
  }
}
