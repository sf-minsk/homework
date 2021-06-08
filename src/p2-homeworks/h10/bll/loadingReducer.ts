export type initialStateType = {
    isLoading: boolean
}

type loadingActionType = {
    type: 'IS-LOADING'
    isLoading: boolean
}

const initialState = {
    isLoading: false
}

export const loadingReducer = (state: initialStateType = initialState, action: loadingActionType): initialStateType => {
    switch (action.type) {
        case 'IS-LOADING': {
            const stateCopy = {...state}
            stateCopy.isLoading = action.isLoading
            return stateCopy
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): loadingActionType => {
    return {
        type: 'IS-LOADING',
        isLoading: isLoading
    }
}