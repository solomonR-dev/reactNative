import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfos from "../../components/features/restaurants/components/restaurants.info";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  backgroundcolor: white;
  margin-top: ${StatusBar.currentHeight || 0}px;
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfos />
      </RestaurantListContainer>
    </SafeArea>
  );
};
