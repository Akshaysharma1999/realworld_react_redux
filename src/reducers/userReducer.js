const INITIAL_STATE={
    currentProfile:null
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
    else
    {
        return state
    }
}