
//Reducer
const sendMessageReducer = (state = 'Nothing', action) => {
    switch (action.type) {
        case 'CLICKED':
            return action.type;
        default:
            return state;
    }
}

export default sendMessageReducer;