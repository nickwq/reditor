
export default function componentReducer(state=[], action) {
    switch (action.type) {
        case 'select':
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