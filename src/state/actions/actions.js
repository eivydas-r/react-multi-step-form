// Action
export const updateFirstName = (name) => {
    return (dispatch) => {
            dispatch({
            type: "UPDATE_FIRST",
            payload: name
        })
    }
}

export const updateLastName = (name) => {
    return (dispatch) => {
            dispatch({
            type: "UPDATE_LAST",
            payload: name
        })
    }
}

export const updateEmail = (data) => {
    return (dispatch) => {
            dispatch({
            type: "UPDATE_EMAIL",
            payload: data
        })
    }
}

export const updatePhone = (data) => {
    return (dispatch) => {
            dispatch({
            type: "UPDATE_PHONE",
            payload: data
        })
    }
}

export const updateUsername = (data) => {
    return (dispatch) => {
            dispatch({
            type: "UPDATE_USER",
            payload: data
        })
    }
}

export const updatePassword = (data) => {
    return (dispatch) => {
            dispatch({
            type: "UPDATE_PASS",
            payload: data
        })
    }
}

export const resetAllData = () => {
    return (dispatch) => {
            dispatch({
            type: "RESET_DATA",
            payload: ''
        })
    }
}