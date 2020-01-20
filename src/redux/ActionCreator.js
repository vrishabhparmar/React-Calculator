import * as ActionTypes from './Actiontypes'


    export const increment = () => 
    ({type : ActionTypes.INCREMENT,
        payload : {
            val : 10
        }
    });
 
    export const decrement = () => 
    ({type : ActionTypes.DECREMENT,
        payload : {
            val : 10
        }
    });    
    

export const del = (val) => ({
    type: ActionTypes.DELETE,
    payload : {
      key : val
    }

})

