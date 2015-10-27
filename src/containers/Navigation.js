import React, {
    Component,
    Navigator,
    PropTypes
} from 'react-native';


import Home from './Home';
import Router from '../configs/Router';
import SceneConfig from '../configs/SceneConfig';


class Navigation extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.navigator.navigationContext.addListener('didfocus', e => {
            console.log(e);
            let route = e.data.route;
            this[route.name] && this[route.name].componentDidFocus && this[route.name].componentDidFocus();
        })
    }


    _configureScene(route) {
        if (route.sceneConfig) {
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    }


    _renderScene(route, navigator) {
        this.router = this.router || new Router(navigator);
        if (route.component) {
            return React.createElement(route.component, Object.assign({}, route.props, {
                    ref: view => this[route.name] = view,
                    router: this.router
                }
            ));
        }
    }


    render() {
        return (
            <Navigator
                ref={(view)=>this.navigator=view}
                initialRoute={Router.initialRoute}
                configureScene={this._configureScene.bind(this)}
                renderScene={this._renderScene.bind(this)}
                />
        )
    }
}


Navigation.propTypes = {
    actions: PropTypes.object,
    state: PropTypes.object
};


export default Navigation;
