import * as actions from '../actions';

const initState = {
    name: 'home'
};


// 其实没必要设置action的默认值,只不过在webstorm中不设置就会检查出错误,所以就加上了
export default function (state = initState, action = new Function) {
    switch (action.type) {
        case actions.CHANGE_NAME:
            return {
                ...state,
                name: action.name
            };
        default :
            return state;
    }
};
