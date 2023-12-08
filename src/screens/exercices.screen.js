/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { FlatList, SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import ExercicesInfos from "../../components/features/restaurants/components/exercices.info";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  backgroundcolor: white;
  margin-top: ${StatusBar.currentHeight || 0}px;
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Container = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const TrainingList = styled(FlatList).attrs({
  // contentContainerStyle: { paddingTop: 16 },
})``;
const workout = [
  {
    name: "Full body",
    description: "23 Excercices | 32 mins",
    rating: 7,
    photo:
      "https://media.gq-magazine.co.uk/photos/6538f4a988a9e4c700a2bf0b/16:9/w_1920,c_limit/Full-body-workout.jpg",
  },
  {
    name: "Upper body",
    description: "11 Excercices | 25 mins",
    photos:
      "https://www.trxtraining.com/cdn/shop/articles/functional-dumbbell-exercises.jpg",
    rating: 5,
  },
  {
    name: "Lower body",
    description: "8 Excercices | 15 mins",
    photos:
      "https://www.trxtraining.com/cdn/shop/articles/functional-dumbbell-exercises.jpg",
    rating: 3,
  },
  {
    name: "Abs",
    description: "5 Excercices | 7 mins",
    photos:
      "https://hips.hearstapps.com/hmg-prod/images/core-workouts-at-home-1666192539.png?crop=1.00xw:0.753xh;0,0.0743xh&resize=1200:*",
    rating: 5,
  },
];
export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <Container>
        <TrainingList
          data={workout}
          renderItem={({ item }) => (
            <View style={{ marginTop: 10 }}>
              <ExercicesInfos training={item} />
            </View>
          )}
          keyExtractor={(e) => e.name}
        />
      </Container>
    </SafeArea>
  );
};
