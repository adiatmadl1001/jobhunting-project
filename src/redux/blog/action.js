export const actionGetBlog = () => async (dispatch)=>{
    dispatch({
        type:'blog_loading',
        payload:{
            loading:true
        }
    })
    const data = [{
        "title":"abc",
        "description":"aaa"
    }];
    
    dispatch({
        type:'blog_success',
        payload:{
            blog:data,
            loading:false
        }
    })
}
export const actionShowBlog = (id=0) => async (dispatch)=>{
    dispatch({
        type:'blog_loading',
        payload:{
            loading:true
        }
    })
    // const {data} = await serviceShowBlog(id);
    
    dispatch({
        type:'blog_detail_success',
        payload:{
            blogDetail:data,
            loading:false
        }
    })
}
