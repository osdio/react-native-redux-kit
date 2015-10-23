import React,{
    Navigator,
    Dimensions
} from 'react-native';


var { width, height } = Dimensions.get('window');


var baseConfig = Navigator.SceneConfigs.FloatFromRight;
var popGestureConfig = Object.assign({}, baseConfig.gestures.pop, {
    edgeHitWidth: width / 3
});


var fullPopGestureConfig = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom.gestures.pop, {
    edgeHitWidth: width
});


export const customFloatFromRight = Object.assign({}, baseConfig, {
    gestures: {
        pop: popGestureConfig
    }
});


export const customFloatFromBottom = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom, {
    gestures: {
        pop: fullPopGestureConfig
    }
});
