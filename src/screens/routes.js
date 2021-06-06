import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons'
import Home from './home'
import Links from './my-links';
import { color } from 'react-native-reanimated';

const Draw = createDrawerNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Draw.Navigator
                drawerContentOptions={{
                    activeBackgroundColor:'#2ccbb9',
                    activeTintColor:'#f8f8f8',
                    marginTop:10,
                    labelStyle:{
                        fontSize:18,
                    }
                }}
            
            >

                <Draw.Screen 
                    name ="Home"
                    component = {Home}
                    options = {{
                        title:"Home",
                        drawerIcon:({focused,size,color})=>{return(<Ionicons 
                            name={focused?'home':'home-outline'} 
                            color={color} 
                            size ={size} />)},
                        }}
                />
                <Draw.Screen 
                    name = "Links" 
                    component = {Links}
                    options = {{
                        title:"Meus Links",
                        drawerIcon:({focused,size,color})=>{return(<Ionicons 
                            name={focused?'stats-chart':'stats-chart-outline'}
                            color={color}
                            size ={size} />)},
                    }}
                    
                    />
            </Draw.Navigator>
        </NavigationContainer>
    )
}