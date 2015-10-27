import connect from '../store/connect.js';

import * as Home from './Home';
import * as About from './About';
import * as MyActivityIndicatorIOS from './MyActivityIndicatorIOS';
import * as MyDatePickerIOS from './MyDatePickerIOS';

var Containers = {
    Home,
    About,
    MyActivityIndicatorIOS,
    MyDatePickerIOS
};

Object.keys(Containers).forEach(function (key) {
    Containers[key] = connect(
        Containers[key].mapStateToProps,
        Containers[key].mapDispatchToProps,
        Containers[key].mergeProps
    )(Containers[key].component);
});

export default Containers;