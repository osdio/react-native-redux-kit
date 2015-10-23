import React,{
    Navigator
} from 'react-native';


import SceneConfig from './SceneConfig';
import Containers from '../containers';


class Router {
    constructor(navigator) {
        this.navigator = navigator;
        for (let name in Containers) {
            this[`to${name}`] = function (props) {
                this.push(props, {
                    component: Containers[name]
                });
            };
        }
    }


    push(props, route) {
        let routesList = this.navigator.getCurrentRoutes();
        let nextIndex = routesList[routesList.length - 1].index + 1;
        route.props = props;
        route.index = nextIndex;
        this.navigator.push(route);
    }


    pop() {
        this.navigator.pop();
    }
}


Router.initialRoute = {
    name: 'home',
    index: 0,
    component: Containers.Home
};


export default Router;
