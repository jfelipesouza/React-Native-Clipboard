import React,{useState} from "react";
import {Keyboard, Modal, TouchableWithoutFeedback} from 'react-native'
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

import ModalLink from "../../components/ModalLink";

export default function Home(props){
    const [value,setValue] = useState('')
    const [visible,setVisible] = useState(false)
    function Clicou(e){
        Keyboard.dismiss()
        setVisible(!visible)
    }

    return(
        <TouchableWithoutFeedback
            onPress={(e)=>{Keyboard.dismiss()}}
        >
            <LinearGradient
                style={{flex:1,justifyContent:'center'}}
                colors={['#1ddbb9','#132742']}    
            >
                <Menu />
                
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
                            autoCorrect={false}
                            value = {value}
                            onChangeText = {(e)=>{setValue(e)}}
                        />
                    </ContainerInput>

                    <ButtomLink 
                        onPress={()=>Clicou(value)}
                    >
                        <ButtonLinkText>Gerar link</ButtonLinkText>
                    </ButtomLink>
                </ContainerContent>
                <Modal visible={visible} transparent animationType={'slide'}>
                    <ModalLink
                        onClose ={()=>{setVisible(!visible)}}
                    />
                </Modal>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}