'use strict';
import {connect as _connect} from 'react-redux/native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';

export default function connect () {
    let args = [...arguments];
    if (!args[1]) {
        args[1] = function (dispatch) {
            return bindActionCreators(actions, dispatch);
        };
    }
    return _connect.apply(this, args);
}