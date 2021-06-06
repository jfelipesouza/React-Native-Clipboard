import React from 'react'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import { Container,ButtonMenu } from './Menu'

export default function Menu(props){

    const navigation = useNavigation();
    
    return(
        <Container>
            
            <ButtonMenu
                onPress = {()=>navigation.openDrawer()}
            >
                <Feather name = "menu" color = {'#fff'} size={40}/>
            </ButtonMenu>

            <ButtonMenu>
                <Feather name = 'share-2' color = {'#fff'} size={40}/>
            </ButtonMenu>
        </Container>
    )
}