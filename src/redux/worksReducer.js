import { FETCH_WORKS } from "./types"

const initialState = {
    works: [],
}


export const workReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WORKS:
            return { ...state, works: action.payload }
        default: return state
    }

} 