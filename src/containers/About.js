import {bindActionCreators} from 'redux';
import connect from '../vendors/connect.js';

import About from '../components/About';

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(About);