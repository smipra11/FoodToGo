import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfoCard } from "../component/restaurant-info.component";
import styled from "styled-components/native";

const SafeView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`

const SearchContainer = styled.View`
  padding: 16px;
`
const RestaurantListContainer = styled.View`
  flex: 1;
  padding : 16px;
  background-color : blue;

`

export const RestaurantsScreen = () => (
<SafeView>
    <SearchContainer>
    <Searchbar />
    </SearchContainer>

    <RestaurantListContainer>
      <RestaurantInfoCard/>
    </RestaurantListContainer>
  </SafeView>
);

