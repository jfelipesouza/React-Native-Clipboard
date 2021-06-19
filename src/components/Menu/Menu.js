import styled from 'styled-components/native';
import {Dimensions} from 'react-native'

const width = Dimensions.get('window').width

export const Container = styled.View`
    display: flex;
    position:absolute;
    top: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    width:${width};
    padding-left: 20px;
    padding-right: 20px;
    

`;

export const ButtonMenu = styled.TouchableOpacity`
    

`;