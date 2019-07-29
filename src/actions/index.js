import realworld from '../api/realworld'
import history from '../history'
import { async } from 'q';

export const signup = (formValues)=>{

    return async(dispatch,getState)=>{
       const response = await realworld.post('/users',{"user":{...formValues}})        
       history.push('/login') 
    }
}

export const login = (formValues)=>{

    return async(dispatch,getState)=>{
            const response = await realworld.post('/users/login',{"user":{...formValues}})        

            dispatch({type:'LOGIN',payload:response.data})
            history.push('/')
    }
}
