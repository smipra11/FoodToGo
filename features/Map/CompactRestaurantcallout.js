import React from "react";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import styled from "styled-components/native";
const CompactImage = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 5px;
`;
const Item = styled.View`
  max-width: 120px;
  padding: 10px;
  align-items: center;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const Text = styled.Text``;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantCallout = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};
