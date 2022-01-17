import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types"

const initialState = {
    fetching: false,
    alert: {
        text: null,
        className: null,
    }
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER: return { ...state, fetching: true }
        case HIDE_LOADER: return { ...state, fetching: false }
        case SHOW_ALERT: return { ...state, alert: action.payload }
        case HIDE_ALERT: return { ...state, alert: { text: null, className: null } }
        default: return state
    }
}