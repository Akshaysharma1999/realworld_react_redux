import _ from 'lodash'
const INITIAL_STATE={
    currentProfile:null,
    user:null,
    articles:[],
    favarticles:[],
    article:{},
    comments:[],
    tags:[]
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
    else if(action.type === 'DELETECMNTS')
    {
        return{...state}
    }
    else if(action.type === 'FEEDARTICLES')
    {
        return{...state,articles:action.payload.articles}
    }
    else if(action.type  === 'MYARTICLES')
    {
        return {...state,articles:action.payload.articles}
    }
    else if(action.type  === 'MYFAVARTICLES')
    {
        return {...state,articles:action.payload.articles}
    }
    else if(action.type ==='FAVARTICLE')
    {      
           return{...state}
    }
    else if(action.type ==='UNFAVARTICLE')
    {      
           return{...state}
    }
    else if(action.type === 'GETTAGS')
    {
        return{...state,tags:action.payload.tags}
    }
    else if(action.type === 'GETBYTAG')
    {
        return{...state,articles:action.payload.articles}
    }
    else if(action.type === 'FOLLOW')
    {
        return {...state,currentProfile:action.payload}
    }
    else if(action.type === 'UNFOLLOW')
    {
        return {...state,currentProfile:action.payload}
    }
    else
    {
        return state
    }
}