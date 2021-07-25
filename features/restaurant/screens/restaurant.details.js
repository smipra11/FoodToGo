import React from "react";
import { View, Text, Image } from "react-native";
import { RestaurantInfoCard } from "../component/restaurant-info.component";
import { List } from "react-native-paper";

const RestaurantDetails = ({ route, navigation }) => {
  const { restaurant } = route.params;
  return (
    <View>
      <RestaurantInfoCard restaurant={restaurant} />

      <List.Section>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Egg Breakfast" />
          <List.Item title="classic  Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="cup" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default RestaurantDetails;
