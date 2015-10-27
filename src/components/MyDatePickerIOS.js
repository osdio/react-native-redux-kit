import React from 'react-native';

var {
    DatePickerIOS,
    StyleSheet,
    Component
} = React;


class MyDatePickerIOS extends Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    onDateChange (date) {
        this.setState({
            date: date
        })
    }

    render () {
        return (
            <DatePickerIOS
                mode="datetime"
                date={this.state.date}
                minuteInterval={30}
                onDateChange={this.onDateChange.bind(this)}/>
        );
    }

}

export default MyDatePickerIOS;