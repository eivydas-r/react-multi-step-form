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