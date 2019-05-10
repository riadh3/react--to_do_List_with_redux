export function handelInput(event) {
    const task = event
    return {
        type: 'GET_TASK',
        payload: task
    }
}


export function addToList(task){

    return{
        type: 'ADD_TO_LIST',
        payload:task
    }
}

export function onDeliteItem(index){
    return{
        type:'DELETE_TASK',
        payload:index
    }
}
export function onEditItem(item,index){
    return{
        type:'EDIT_TASK',
        payload:{
            item:item,
            index:index
        }
    }
}