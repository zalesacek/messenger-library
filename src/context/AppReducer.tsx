import {
    SETTINGS_CHANGE,
} from "../app/Types";

const AppReducer = (state: any, action: any) => {
    switch (action.type) {

        case SETTINGS_CHANGE:
            return {
                ...state,
                params: action.payload,
            };

        default:
            return state;
    }
};

export default AppReducer;