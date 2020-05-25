//Reducer
const sendMessageReducer = (state = '', action) => {
    switch (action.type) {
        case 'CLICKED':
            return action.value;
        default:
            return state;
    }
}

export default sendMessageReducer;