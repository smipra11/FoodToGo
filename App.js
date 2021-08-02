import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastrure/theme/index";
import firebase from "firebase/app";

import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./Services/restaurant/restaurant.contex";
import { LocationContextProvider } from "./Services/location/location.contex";
import { FavouritesContextProvider } from "./Services/Favorite/favorite.contex";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { AppNavigator } from "./infrastrure/navigation/app.navigation";

const firebaseConfig = {
  apiKey: "AIzaSyCClIsHkGwZD6SmjcwtINh5GRKjRP3vMb8",
  authDomain: "mealstogo-fe248.firebaseapp.com",
  projectId: "mealstogo-fe248",
  storageBucket: "mealstogo-fe248.appspot.com",
  messagingSenderId: "556995210604",
  appId: "1:556995210604:web:be3f61b49cfb4d7ae05749",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAutheticated, SetisAutheticated] = useState(false);
  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("smipra11@gmail.com", "test123")
      .then((user) => {
        console.log(user);
        SetisAutheticated(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}
