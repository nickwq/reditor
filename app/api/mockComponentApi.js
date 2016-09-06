import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const components = [
    {
        name: 'BIT',
        data: 1
    },
    {
        name: "LWD",
        data: 2
    }, {
        name: "RSS",
        data: 3
    }, {
        name: "MOTOR",
        data: 4
    }, {
        name: "COLLAR",
        data: 5
    }, {
        name: "HWDP",
        data: 6
    }, {
        name: "DP",
        data: 7
    }, {
        name: "DP",
        data: 8
    }, {
        name: "DP",
        data: 9
    },
    {
        name: "DP",
        data: 10
    }

];


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (component) => {
    return replaceAll(component.data, ' ', '-');
};

class ComponentApi {
    static getAllComponents() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], components));
            }, delay);
        });
    }

    static saveComponent(component) {
        component = Object.assign({}, component); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                component.id = generateId(component);
                components.push(component);
                resolve(component);
            }, delay);
        });
    }

    static deleteComponent(componentId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfComponentToDelete = components.findIndex(component => {
                    component.id == componentId;
                });
                components.splice(indexOfComponentToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default ComponentApi;
