import _ from 'lodash'
const INITIAL_STATE={
    currentProfile:null,
    user:null,
    articles:[],
    article:{},
    comments:[]
}

export default (state = INITIAL_STATE,action)=>{
    if(action.type === 'GETPROFILE')
    {
        return{...state,currentProfile:action.payload}
    }
    else if(action.type === 'USER')
    {
        return{...state,user:action.payload.user}
    }
    else if(action.type === 'LOGIN')
    {
        return{...state,user:action.payload.user}
    }
    else if(action.type === 'LOGOUT')
    {
        return{...state,user:null}
    }
    else if(action.type === 'USERSETTINGS')
    {
        return{...state,user:action.payload.user}
    }
    else if(action.type === 'GLOBAL')
    {
        //console.log(action.payload.articles)
        return{...state,articles:action.payload.articles}
    }    
    else if(action.type === 'GETARTICLE')
    {
        return{...state,article:action.payload}
    }
    else if(action.type === 'GETCOMMENTS')
    {
        return{...state,comments:action.payload.comments}
    }
    else if( action.type === 'ADDCOMMENTS')
    {
        return{...state,comments:[...state.comments,action.payload.comment]}
    }
    else
    {
        return state
    }
}