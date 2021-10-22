const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    userName: '',
    password: ''
}

const updateDataReducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_FIRST":
            state.firstName = action.payload;
            return state;
        case "UPDATE_LAST":
            state.lastName = action.payload;
            return state;
        case "UPDATE_EMAIL":
            state.email = action.payload;
            return state;
        case "UPDATE_PHONE":
            state.phoneNumber = action.payload;
            return state;
        case "UPDATE_USER":
            console.log("Resetting name");
            state.userName = action.payload;
            return state;
        case "UPDATE_PASS":
            state.password = action.payload;
            return state;
        case "RESET_DATA":
            state = {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                userName: '',
                password: ''
            };
            console.log("Resetting data", state);
            return state;
        default:
            return state;
    }
}

export default updateDataReducer;