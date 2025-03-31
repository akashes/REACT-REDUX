const initialState={
    burgerBase:100
}

 const reducer=(state=initialState,action)=>{

switch(action.type){
    case 'ORDER_BURGER':
        return action.payload ?     {...state,burgerBase:state.burgerBase-action.payload} :{...state,burgerBase:state.burgerBase-1}
        default :
            return state
}

}

export default reducer