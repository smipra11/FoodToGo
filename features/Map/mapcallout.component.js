import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantCallout } from "./CompactRestaurantcallout";

const MyText = styled.Text``;

export const MapCallOut = ({ restaurant }) => {
  console.log(restaurant);

  return <CompactRestaurantCallout restaurant={restaurant} />;
};
