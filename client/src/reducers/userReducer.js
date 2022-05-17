const initState = {username: "", totalScore: 0, gameScore: 0, challengePending: false ,error: false, socket: null};

const userReducer = (state=initState, action) => {
    switch(action.type){
        case 'SET_SOCKET_CONN':
            return { ...state, socket: action.payload }
        case 'SET_USERNAME':
            return { ...state, username: action.payload }
        case 'SET_CURR_SCORE':
            return { ...state, gameScore: action.payload };
        case 'SET_TOTAL_SCORE':
            return { ...state, totalScore: action.payload, error: false };
        case 'SET_CHALLENGE_PENDING':
            return { ...state, challengePending: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    };
};

export default userReducer;