import React, {
    View,
    PropTypes,
    Component,
    StyleSheet,
    Text
} from 'react-native';


class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={()=>{
                    this.props.actions.toast('test');
                }}>
                    home
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export function mapStateToProps(state) {
    return state;
}

export const LayoutComponent = Home;
