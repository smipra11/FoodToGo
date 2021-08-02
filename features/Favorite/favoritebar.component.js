import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { ScrollView } from "react-native";
import { CompactRestaurantCallout } from "../Map/CompactRestaurantcallout";
import { TouchableOpacity } from "react-native-gesture-handler";
const FavoritesWrapper = styled.View`
  padding: 10px;
`;
const FavoriteBar = ({ favorites, onNavigate }) => {
  return (
    <FavoritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <TouchableOpacity
              onPress={() =>
                onNavigate("RestaurantDetails", {
                  restaurant,
                })
              }
            >
              <CompactRestaurantCallout restaurant={restaurant} key={key} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
export default FavoriteBar;
