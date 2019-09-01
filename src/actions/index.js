import realworld from '../api/realworld'
import history from '../history'
import { async } from 'q';


const headers = {
    'Content-Type': 'application/json',
     'Authorization': `Token ${JSON.parse(localStorage.getItem('jwt'))}` 
}

export const signup = (formValues) => {

    return async (dispatch, getState) => {
        const response = await realworld.post('/users', { "user": { ...formValues } })
        history.push('/login')
    }
}
export const login = (formValues) => {

    return async (dispatch, getState) => {
        const response = await realworld.post('/users/login', { "user": { ...formValues } })
        await localStorage.setItem('jwt', JSON.stringify(response.data.user.token)) 
        await dispatch({ type: 'LOGIN', payload: response.data })        
       history.push(`/profile/${response.data.user.username}`)
    }
}

export const logout = () => {
    localStorage.setItem('jwt', null)
    return {
        type: "LOGOUT"
    }
}

export const getProfile = (username) => {
    return async (dispatch, getState) => {

        const response = await realworld.get(`profiles/${username}`)

        dispatch({ type: 'GETPROFILE', payload: response.data })
    }
}

export const getCurrentUser = () => {
    return async (dispatch, getState) => {
        const response = await realworld.get('/user', { headers: headers})

        dispatch({ type: 'USER', payload: response.data })
    }
}

export const userSettings = (formValues) => {
    return async (dispatch, getState) => {
        const response = await realworld.put('/user',{"user":{...formValues}} , {headers:headers} )

        dispatch({type:'USERSETTINGS',payload:response.data})
        history.push('/')
    }
}

export const globalFeed = () => {
    return async (dispatch, getState) => {
        const response = await realworld.get('/articles',{headers:headers})
        dispatch({type:'GLOBAL',payload:response.data})        
    }
}

export const newPost = (formValues)=>{
    return async (dispatch,getState)=>{
        const response = await realworld.post('/articles',{"article":{...formValues}},{headers:headers})
       
        history.push('/')
    }
}

export const getArticle = (slug)=>{
    return async(dispatch,getState)=>{
        const response  = await realworld.get(`/articles/${slug}`)
       // console.log(response)
        dispatch({type:'GETARTICLE',payload:response.data})
    }
}

export const getComments = (slug)=>{
    return async (dispatch,getState)=>{
        const response = await realworld.get(`/articles/${slug}/comments`)

        dispatch({type:'GETCOMMENTS',payload:response.data})
    }
}

export const deleteComments = (slug,id)=>{
    return async (dispatch,getState)=>{
        const response = await realworld.delete(`/articles/${slug}/comments/${id}`,{ headers: headers})
        history.push('/')
    }
}

export const postComment = (slug,formValues)=>{
    return async (dispatch,getState)=>{
        const response = await realworld.post(`/articles/${slug}/comments`,{"comment":{...formValues}},{ headers: headers})
        
        dispatch({type:'ADDCOMMENTS',payload:response.data})
    }
}

export const getFeedArticles = ()=>{
    return async (dispatch,getState)=>{
        const response = await realworld.get('/articles/feed',{headers:headers})

        dispatch({type:'FEEDARTICLES',payload:response.data})
    }    
}

export const getMyArticles = (username)=>{
    return async (dispatch,getState)=>{
        const response = await realworld.get('/articles',{
        headers:headers,
            params:{
                author:username
            }
        })

        dispatch({type:'MYARTICLES',payload:response.data})
    }    
}


export const getMyFavArticles = (username)=>{
    return async (dispatch,getState)=>{
        const response = await realworld.get('/articles',{
            params:{
                favorited:username
            },headers:headers
        })
        dispatch({type:'MYFAVARTICLES',payload:response.data})
    }    
}

export const favArticle = (slug)=>{
    return async (dispatch,getState)=>{
        //console.log(slug)
        const response = await realworld.post(`/articles/${slug}/favorite`,{},{headers:headers})
        
        dispatch({type:'FAVARTICLE',payload:response.data})
    }
}

export const unFavArticle = (slug)=>{
    return async (dispatch,getState)=>{
       // console.log(slug)
        const response = await realworld.delete(`/articles/${slug}/favorite`,{headers:headers})
        
        dispatch({type:'UNFAVARTICLE',payload:response.data})
    }
}

export const getTags = ()=>{
    return async (dispatch,getState)=>{
       
        const response = await realworld.get(`/tags`)
        
        dispatch({type:'GETTAGS',payload:response.data})
    }
}

export const getByTag= (tag)=>{
    return async (dispatch,getState)=>{
        const response = await realworld.get('/articles',{
        headers:headers,
            params:{
                tag:tag
            }
        })
        dispatch({type:'GETBYTAG',payload:response.data})
    }    
}

// export const editArticle= (slug,data)=>{
//     return async (dispatch,getState)=>{
//         const response = await realworld.put(`/articles/${slug}`,{headers:headers})
  
//         dispatch({type:'EDITARTICLE',payload:response.data})
//     }    
// }


