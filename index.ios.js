import React ,{
    Component,
    AppRegistry
}from 'react-native';
import {Provider} from 'react-redux/native';
import configureStore from './src/store/configureStore';
import Navigation from './src/containers/Navigation';


const store = configureStore();


class BAPP extends Component {
    render() {
        return (
            <Provider store={store}>
                {() => <Navigation/>}
            </Provider>
        )
    }
}


AppRegistry.registerComponent('bapp', ()=> BAPP);
