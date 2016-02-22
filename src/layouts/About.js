import About from '../components/About';

export function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export const component = About;
