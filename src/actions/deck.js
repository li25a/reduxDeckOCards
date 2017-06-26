import * as Type from 'constants/action-types';

export function shuffle() {
    return {
        type: Type.SHUFFLE
    };
}

export function deal() {
    return {
        type: Type.DEAL
    };
}
}
