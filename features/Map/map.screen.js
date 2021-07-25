import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components";

import { Text, View, StyleSheet, Dimensions } from "react-native";
import { SafeArea } from "../restaurant/component/Utility/safe-area.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
