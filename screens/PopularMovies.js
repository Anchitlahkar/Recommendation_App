import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import axios from "axios";

export default class PolularScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      list_data: [],
      url: "http://cors-anywhere.herokuapp.com/https://eb5fc84998c8.ngrok.io/popular-movies",
    };
  }

  getData = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then((response) => {
        return this.setState({ list_data: response.data.data });
      })
      .catch((error) => alert(error.message));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <View>
        <SafeAreaView>
         <Text>Popular Movies</Text>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
