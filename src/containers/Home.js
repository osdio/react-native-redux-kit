import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';


import * as actions from '../actions/home';
import Home from '../components/Home';


function mapStateToProps(state) {
    return {
        home: state.home
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}


function mergeProps(stateProps, dispatchProps, ownProps) {
    return {
        ...ownProps,
        ...stateProps,
        ...dispatchProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Home);
