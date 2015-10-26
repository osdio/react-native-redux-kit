import About from '../components/About';

export function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export var component = About;