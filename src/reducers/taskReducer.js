export default function (state ='', action) {
    switch (action.type) {
        case 'GET_TASK':
            return action.payload
        case 'EDIT_TASK':
        return action.payload.item

        default:
            return state
    }
}