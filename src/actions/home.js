// 常量
export const CHANGE_NAME = 'CHANGE_NAME';


// action函数
export function changeName(name) {
    return {
        type: CHANGE_NAME,
        name
    }
}



