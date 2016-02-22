import MyActivityIndicatorIOS from '../components/MyActivityIndicatorIOS';

export function mapStateToProps (state) {
    return {
        home: state.home 
    };
}
 
export const component = MyActivityIndicatorIOS;