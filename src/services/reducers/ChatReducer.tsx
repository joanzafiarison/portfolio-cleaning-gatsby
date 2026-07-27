

export function chatReducer (state, action) {

    switch(action.type) {
        case 'UPDATE' :
            return {
                ...state,
                [action.key] : action.value
            }
        default :
            throw Error('Unknown action: ' +action.type)
    }

}



export const initialChatState = {
        prestation : '', //1
        surface :'',  //1
        date : '', //3
        hour : {
            start : "",
            end : ""
        },
        options : [], //4
        note : ""
}