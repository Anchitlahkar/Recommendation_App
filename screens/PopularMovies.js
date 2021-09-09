import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ListItem, Card } from "react-native-elements";
import axios from "axios";

export default class PolularScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      list_data: [],
      url: "http://6554-49-37-35-230.ngrok.io/popular-movies",
    };
  }

  timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return `${hours} hrs ${minutes} mins`;
  }
  getData = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then((response) => {
        this.setState({ list_data: response.data.data });
      })
      .catch((error) => alert(error.message));
  };

  componentDidMount() {
    this.getData();
  }

  keyExtractor = (item, index) => index.toString();

  renderItems = ({ item, index }) => {
    {
      console.log(item[0]);
    }
    <Card
      key={`card-${index}`}
      image={{ uri: item[1] }}
      imageProps={{ resizeMode: "cover" }}
      featuredTitle={item[0]}
      containerStyle={styles.cardContainer}
      featuredTitleStyle={styles.title}
      // featuredSubtitle={`${
      //   item.release_date.split("-")[0]
      // } | ${this.timeConvert(item.duration)}`}
      // featuredSubtitleStyle={styles.subtitle}
    ></Card>;
  };

  render() {
    const { list_data } = this.state;
    console.log(list_data[0]);
    return (
      <View style={styles.container}>
        <FlatList
          data={list_data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    color: "#fff",
    alignSelf: "flex-start",
    paddingLeft: RFValue(15),
    fontSize: RFValue(25),
    marginTop: RFValue(65),
  },
  subtitle: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: RFValue(15),
    fontSize: RFValue(15),
  },
  cardContainer: {
    flex: 1,
    borderRadius: RFValue(10),
    justifyContent: "center",
    height: RFValue(110),
    marginBottom: RFValue(20),
  },
});
