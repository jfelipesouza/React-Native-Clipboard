import styled from 'styled-components/native';
import {Platform} from 'react-native'

export const ContainerLogo = styled.View`
  align-items:center;
  justify-content:center;
  margin-top:${Platform.OS ==='ios'?35+'px':5+'px'};

`;

export const Logo = styled.Image`
    width:150px;
    height:150px ;
`;

export const ContainerContent = styled.View`
    margin-top:${Platform.OS ==='ios'?35+'%':5+'%'};

`;

export const Title = styled.Text`
    color:white;
    font-size:35px;
    font-weight:bold;
    text-align:center;
`;

export const SubTitle = styled.Text`
    color:white;
    font-size:18px;
    text-align:center;
    padding-bottom:5%;
`;

export const ContainerInput = styled.View`
    align-items: center;
    flex-direction: row;
    width: 100%;
    border-radius:7px;
    margin:15px 0;
    padding-left:15px;
    padding-right: 15px;
`;

export const Input = styled.TextInput`
    align-items:center;
    justify-content:center;
    padding-left:10px;
    width:90%;
    height: 50px;
    padding: 10px;
    background-color:rgba(255,255,255,0.15);
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    font-size:17px;
    color:#ffff;
`;

export const BoxIcon = styled.View`
    align-items:center;
    padding-left:10px;
    width:11%;
    height: 50px;
    background-color:rgba(255,255,255,0.15);
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    justify-content:center;
    
`;

export const ButtomLink = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;
    height:45px;
    background-color:#fff;
    margin:0 15px;
    border-radius:7px;
    margin-bottom: 15px;
`;

export const ButtonLinkText = styled.Text``;