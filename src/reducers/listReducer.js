export default function (state = [], action) {
    switch (action.type) {

        case 'ADD_TO_LIST':
            return [...state, action.payload]
        case 'DELETE_TASK':
            return state.filter((_, i) => i !== action.payload)
        case 'EDIT_TASK':
            return state.filter((_, i) => i !== action.payload.index)


        default:
            return state
    }
}