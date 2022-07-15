import {
    DARK, LIGHT
} from '../constants/theme';

const INITIAL_STATE = {
    darkMode: false,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LIGHT:
            return { darkMode: false };
        case DARK:
            return { darkMode: true };

        default:
            return state;
    }
}
