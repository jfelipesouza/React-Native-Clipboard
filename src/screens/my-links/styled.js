import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #132742;
`;

export const Title = styled.Text`
    margin-top:${Platform==='ios'?35+'%': 25+'%'};
    margin-left: 20px;
    font-size:30px ;
    font-weight:700;
    color: #fff;
`
export const ListLinks =styled.FlatList`


`