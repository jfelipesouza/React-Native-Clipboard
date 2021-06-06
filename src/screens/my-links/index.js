import React from 'react';
import Menu from '../../components/Menu';
import {
    Container,
    Title,
    ListLinks
} from './styled'  
import ListItem from '../../components/Links/ListItem'

export default function Links(props){
    return(
        <Container>
            <Menu/>
            <Title>Meus Links</Title>
            <ListLinks
                data={[{id:1,link:'google.com'}]}
                keyExtractor ={(item)=>String(item.id)}
                renderItem={({item})=><ListItem/>}
                contentContainerStyle={{paddingBottom:20}}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}