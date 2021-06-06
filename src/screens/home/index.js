import React from "react";
import {TouchableWithoutFeedback} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { LinearGradient } from "expo-linear-gradient";
import Menu from "../../components/Menu";
import {
    ContainerLogo,
    Logo,
    ContainerContent,
    Title,SubTitle,
    ContainerInput,
    Input,
    BoxIcon,
    ButtomLink,
    ButtonLinkText,
} from './home'

export default function Home(props){
    return(
        <TouchableWithoutFeedback>
        <LinearGradient
            style={{flex:1,justifyContent:'center'}}
            colors={['#1ddbb9','#132742']}    
        >
            <Menu/>
            
            <ContainerLogo>
                <Logo 
                    source={require('../../../assets/Logo.png')}
                    resizeMode={'contain'}
                />
            </ContainerLogo>

            <ContainerContent>
                <Title>Clipboard</Title>
                <SubTitle>Cole seu link para salvar</SubTitle>
            
                <ContainerInput>
                    <BoxIcon>
                        <Feather name ='link' size ={22} color = {'#fff'} />
                    </BoxIcon>
                    <Input
                        placeholder ={'Cole seu link aqui...'}
                        placeholderTextColor = {'#fff'}
                        autoCapitalize = "none"
                        
                    />
                </ContainerInput>

                <ButtomLink>
                    <ButtonLinkText>Gerar link</ButtonLinkText>
                </ButtomLink>
            </ContainerContent>
                        
        </LinearGradient>
        </TouchableWithoutFeedback>
    )
}