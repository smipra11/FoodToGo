import React, { useContext } from "react";

import { FlatList, View, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../component/restaurant-info.component";
import styled from "styled-components/native";
import { SafeArea } from "../component/Utility/safe-area.component";
import { RestaurantsContext } from "../../../Services/restaurant/restaurant.contex";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../component/search.component";
import { Spacer } from "../component/spacer";

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);
  return (
    <SafeArea>
      {isLoading && (
        // eslint-disable-next-line react-native/no-inline-styles

        <ActivityIndicator animating={true} size={50} color={Colors.blue300} />
      )}

      <Search />
      <RestaurantListContainer>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
