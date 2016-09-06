import componentApi from '../api/mockComponentApi';

export function selectComponent(index) {
    return {type: 'SELECT_COMPONENT', index};
}

export function loadComponentsSuccess(components) {
    return {type: 'LOAD_COMPONENTS_SUCCESS', components};
}

export function loadComponents() {
    return function (dispatch) {
        return componentApi.getAllComponents()
            .then(components => {
                dispatch(loadComponentsSuccess(components))
            }).catch(error => {
                throw(error);
            });
    }
}