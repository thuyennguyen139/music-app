const initialState = true;

const openReducer = (state = initialState, action ) =>{
    switch(action.type){
        case 'Open':{
            state = true;
            
            return state;
        }
        case 'Close':{
            state = false;
            
            return state;
        }
        default: {
            return state;
        }
    }
    
}
export default openReducer;
