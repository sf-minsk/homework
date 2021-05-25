import {UserType} from "../HW8";

type SortAT = {
    type: 'sort'
    payload: string
}

type CheckUpAT = {
    type: 'check'
    payload: number
}

type ActionsType = SortAT | CheckUpAT

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
            } else {
                return [...state.sort((a, b) => a.name < b.name ? 1 : -1)]
            }
        }
        case 'check': {

            return state.filter(s => s.age > action.payload).sort((a,b) => a.age - b.age  )
        }
        default:
            return state
    }
}