const initialState={
    loading:false,
    products:[],
    error:false,
}


 const reducer=(state=initialState,action)=>{
    console.log(action.payload)
    switch(action.type){
        case 'FETCH_REQUEST':
            return {...StaticRange,loading:true}
            case 'FETCH_SUCCESS' :
                return {...state,loading:false,products:action.payload}
                case 'FETCH_ERROR' :
                    return{...state,loading:false,error:action.payload}
                    default :
                     return state


    }
}

export default reducer