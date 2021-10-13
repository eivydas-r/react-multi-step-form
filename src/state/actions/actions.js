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

export const updateEmail = (name) => {
    return (dispatch) => {
            dispatch({
            type: "UPDATE_EMAIL",
            payload: name
        })
    }
}

export const updatePhone = (name) => {
    return (dispatch) => {
            dispatch({
            type: "UPDATE_PHONE",
            payload: name
        })
    }
}