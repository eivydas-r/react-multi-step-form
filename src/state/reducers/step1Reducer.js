

const step1Reducer = (state = 'test', action) => {
    switch(action.type){
        case "UPDATE_FIRST":
            return action.payload;
        case "UPDATE_LAST":
            return action.payload;
        default:
            return state;
    }
}

export default step1Reducer;