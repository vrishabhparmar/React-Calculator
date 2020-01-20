import * as ActionTypes from './Actiontypes'


const initialState = {
    id: 0,
    count : 0,
    History : []
}

export const Reducer = (state = initialState ,action) => {
   
    switch(action.type){
        

        case ActionTypes.INCREMENT :
        
           return({
               ...state,
               count : state.count + action.payload.val,
               History: state.History.concat({id: Math.floor(Math.random()*100),count:state.count + action.payload.val})
               
            })
           
           
        
        
        case ActionTypes.DECREMENT:
           
            return({
                ...state, 
                count : state.count - action.payload.val,
                History: state.History.concat({id: Math.floor(Math.random()*100),count:state.count - action.payload.val})
            })
           
        case ActionTypes.DELETE:
            return{
                ...state,
                History : state.History.filter(ele => ele.id !== action.payload.key)
            }
        default:
            return state;
    }

    
}