import {bindActionCreators} from 'redux';
import connect from '../vendors/connect.js';

import Home from '../components/Home';


function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(Home);