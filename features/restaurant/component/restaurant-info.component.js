import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View ,Image} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from 'react-native-svg';
import star from "../../../assets/star"
import open from "../../../assets/open";
import {Spacer} from "../component/spacer";


const Title = styled.Text`
font-family: ${(props) => props.theme.fonts.heading};
  
  color: ${(props) => props.theme.colors.ui.primary};
  font-size:${(props) => props.theme.fontSizes.body};
`;

const Info = styled.View`

padding: ${(props) => props.theme.space[3]};
`

const RestaurantCard  = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Address = styled.Text`
font-family: ${(props) => props.theme.fonts.body};
  
  color: ${(props) => props.theme.colors.ui.primary};
  font-size:${(props) => props.theme.fontSizes.caption};
`
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantInfoCard = ({item}) => {
  

 const ratingArray = Array.from(new Array(Math.floor(item.rating)));
  return (
    <RestaurantCard elevation={5}>
    <RestaurantCardCover key={item.name} source={{ uri: item.photos[0] }} />
    <Info>
      <Text variant="label">{item.name}</Text>
      <Section>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <SectionEnd>
          {item.isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          <Spacer position="left" size="large">
            {item.isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </Spacer>
          <Spacer position="left" size="large">
            <Icon source={{ uri: item.icon }} />
          </Spacer>
        </SectionEnd>
      </Section>
      <Address>{item.address}</Address>
    </Info>
  </RestaurantCard>
  );
};


