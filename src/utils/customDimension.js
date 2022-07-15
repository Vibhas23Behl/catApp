import { Dimensions } from 'react-native';

export const {width,height} = Dimensions.get('screen');

export const customWidth = (percent) => {
    return (width * percent / 100)
}

export const customHeight =  (percent) => {
    return (height * percent / 100);
}