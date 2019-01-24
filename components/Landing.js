import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Modal,
  Button,
  DatePickerAndroid,
  Platform
} from "react-native";
import { FilmBrief } from "./FilmBrief";
import { DatePicker } from "./DatePicker";
import { store } from "../store/store";
import { FilmDetails } from "./FilmDetails";
import { Header } from "./Header";

export class Landing extends Component {

  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }

  setDate(date) {
    console.log(date);
    console.log(Platform.OS);
  }

  pickDate = () => {
    DatePickerAndroid.open({
      date: new Date()
    }).then(({ month, day, year }) => {
      this.setDate(new Date(year, month, day));
    });
  };

  closeModal = () => {
    store.dispatch({ type: "HIDE_FILM_DETAILS" });
  };

  chooseTime = showing => {
    store.dispatch({type:'HIDE_FILM_DETAILS'})
    this.props.navigation.navigate('PickSeats', { showing, selected_film: this.state.selected_film });
  }

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <Modal
          visible={this.state.show_film_details}
          onRequestClose={() => {}}>
          <SafeAreaView style={{flex:1}}>
            <FilmDetails
              chooseTime={this.chooseTime}
              film={this.state.selected_film}
              selected_date={this.state.selected_date}
              showings={this.state.selected_film_showings}/>
            <Button onPress={this.closeModal} title="Done" />
          </SafeAreaView>
        </Modal>
        <ScrollView>
          <Header />
          <Text style={{fontSize: 20}}>Pick a movie below and a date to see showtimes</Text>

          <DatePicker />

          {this.state.films.map(film => {
            return (
              <FilmBrief
                isSelected={film == this.state.selected_film}
                film={film}
                key={film.id}
                selected_date={this.state.selected_date}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
