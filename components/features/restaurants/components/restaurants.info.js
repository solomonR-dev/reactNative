import React from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
const { Title: CardTitle, Actions, Content, Cover } = Card;
import favoriteBorder from "../../../../assets/favoriteBorder";
import burn from "../../../../assets/burn";
import { Spacer } from "../../../spacer/spacer.component";
const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: 10px 0px 10px 0px;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const BodyText = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantCardCover = styled(Cover)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export default RestaurantInfos = ({ restautant = {} }) => {
  const {
    name = "Some Restaurant",
    description = "",
    icon,
    photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restautant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard style={styles.container} elevation={5}>
      <Cover key={name} source={{ uri: photos }} />
      <Content>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={favoriteBorder} />
            ))}
          </Rating>
          <SectionEnd>
            <Spacer>
              {isOpenNow && <SvgXml xml={burn} width={20} height={20} />}
            </Spacer>
          </SectionEnd>
        </Section>

        <BodyText>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout 🎈🎈🎈.
        </BodyText>
        {/* </Info> */}
      </Content>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({});
