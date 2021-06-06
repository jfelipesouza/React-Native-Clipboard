import React from 'react';
import {
    ModalContainer,
    Headers,
    ModalIconButton,
    Container,
    LinkArea,
    Title,
    LongUrl,
    ShortLinkArea,
    ShortLinkUrl,


} from './Modal';
import {Feather} from '@expo/vector-icons'
import { View,TouchableWithoutFeedback,Share } from 'react-native';
import Clipboard from 'expo-clipboard'

export default function ModalLink(props){

    function copyLink(text) {
        Clipboard.setString('google.com')
        console.log('Copiado')
    }
    async function handleShare(text){
        try{
            const result = await Share.share({
                message:`Link:google.com`
            });
            if(result.action === Share.sharedAction){
                if(result.activityType){
                    console.log('fechou')
                }else{
                    console.log('compartilhou')
                }
            }else if(result.action === Share.dismissedAction){
                console.log('modall fechado')
            }
        }catch(error){
            console.log(error.message)
        }
        
    }

    return(
        <ModalContainer>
            <TouchableWithoutFeedback
                onPress = {(e)=>{props.onClose()}}
            >
                <View style={{flex:1}}/>
            </TouchableWithoutFeedback>
           <Container>
                
                <Headers>
                
                    <ModalIconButton
                        onPress ={()=>{props.onClose()}}
                    >
                        <Feather 
                            name = 'x' 
                            size ={32} 
                            color ={"#132742"}/>
                    </ModalIconButton>
                    
                    <ModalIconButton
                        onPress={handleShare}                    
                    >
        
                        <Feather 
                            name = 'share-2' 
                            size ={32} 
                            color ={"#132742"}/>
        
                    </ModalIconButton>
                
                </Headers>

                <LinkArea>
        
                    <Title>Link Salvo</Title>
        
                    <LongUrl numberOfLines={1}>google.com </LongUrl>
                    
                    <ShortLinkArea>
                        <ShortLinkUrl numberOfLines={1} >
                            google.com
                        </ShortLinkUrl>
                    
                        <ModalIconButton
                            onPress={()=>{copyLink()}}
                        
                        >
                            <Feather
                                name='copy'
                                size={30}
                                color={'#fff'}
                            />
                        </ModalIconButton>
                    
                    </ShortLinkArea>
                
                </LinkArea>
           
           </Container>
        
        </ModalContainer>
    )
}