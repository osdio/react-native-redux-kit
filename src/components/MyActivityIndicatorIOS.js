import React, {
    Component,
    ActivityIndicatorIOS,
    StyleSheet
} from 'react-native';

class MyActivityIndicatorIOS extends Component {
    constructor (props) {
        super(props);
        this.state = {
            animating: true
        }
    }

    setToggleTimeout () {
        setTimeout(
          () => {
            this.setState({animating: !this.state.animating});
            this.setToggleTimeout();
          },
          1200
        );
    }

    componentDidMount () {
        this.setToggleTimeout();
    }
    _onLayout () {
        console.log('layout');
    }
    render () {
        return (
            <ActivityIndicatorIOS
                animating={this.state.animating}
                onLayout={this._onLayout}
                style={{height: 200, width: 200}}
                color="red"
                size="large" />
        );
    }
}

let styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    gray: {
        backgroundColor: '#cccccc',
    },
    
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default MyActivityIndicatorIOS;
