
export default function componentReducer(state=[], action) {
    switch (action.type) {
        case 'SELECT_COMPONENT':
            return state.map((comp, index) => {
                if (index === action.index) {
                    return Object.assign({}, comp, {
                        selected: !comp.selected
                    });
                }
                return comp;
            });
        default:
            return state;
    }
}