import React,{
    View,
    Component,
    PropTypes,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


class Home extends Component {
    constructor (props) {
        super(props);
        this.count = 0;
    }


    componentDidFocus () {
        console.log('componentDidFocus');
    }


    _onPress () {
        this.props.changeName(`home${++this.count}`);
    }


    _onAboutPress () {
        this.props.router.toAbout();
    }

    _onMyActivityIndicatorIOSPress () {
        this.props.router.toMyActivityIndicatorIOS();
    }
    _onMyDatePickerIOSPress () {
        this.props.router.toMyDatePickerIOS();
    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={this._onPress.bind(this)}>
                        <Text style={styles.text}>
                            {this.props.home.name}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._onAboutPress.bind(this)}>
                        <Text style={styles.text}>
                            About
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._onMyActivityIndicatorIOSPress.bind(this)}>
                        <Text style={styles.text}>
                            MyActivityIndicatorIOS
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._onMyDatePickerIOSPress.bind(this)}>
                        <Text style={styles.text}>
                            MyDatePickerIOS
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        flex: 1
    }
});


Home.propTypes = {
    home: PropTypes.object,
    changeName: PropTypes.func
};


export default Home;
