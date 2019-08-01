import realworld from '../api/realworld'
import history from '../history'


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
        localStorage.setItem('jwt', JSON.stringify(response.data.user.token))

        dispatch({ type: 'LOGIN', payload: response.data })
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
        const response = await realworld.get('/articles')
        dispatch({type:'GLOBAL',payload:response.data})        
    }
}

export const newPost = (formValues)=>{
    return async (dispatch,getState)=>{
        const response = await realworld.post('/articles',{"article":{...formValues}},{headers:headers})
       
        history.push('/')
    }
}


