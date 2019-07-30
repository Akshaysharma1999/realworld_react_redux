const INITIAL_STATE = {
    isSignedIn: null,   
    jwt:null,
    username:null
  }
  

export default(state=INITIAL_STATE,action)=>{

    if(action.type === 'LOGIN')
    {
        //console.log(action.payload)
        return{...state,isSignedIn:true,username:action.payload.user.username,jwt:action.payload.user.token}
    }   
    else
    {
        return state
    }

}