import Home from '../components/Home';

export function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export var component = Home;
