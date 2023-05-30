const counter = {
    count: 0,
}

function countReducer(state = counter, action){
    if(action.type === 'count/increased'){
        return {
            ...state,
            count: state.count + 1, 
        }
    } else if(action.type === 'count/decreased'){
        return {
            ...state,
            count: state.count - 1,
        }
    } else {
        return{
            ...state,
            count: 0,
        }
    }
}

export default countReducer;

