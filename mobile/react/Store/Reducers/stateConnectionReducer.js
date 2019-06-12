import websocketUtil from "../../utils/websocket";

const initialStateConnection = {stateCo : false, listProject : []};

function stateConnection(state = initialStateConnection, action) {
    let nextState;
    switch (action.type) {
        case 'STATE_CHANGE':
            nextState = {...state, stateCo: action.value};
            return nextState || state;
        case 'STATE_RELOAD_LISTPROJECT':
            nextState = {...state, listProject: action.value};
            return nextState || state;
        default:
            return state;
    }
}

export default stateConnection;