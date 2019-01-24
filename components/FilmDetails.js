import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { host } from "../helpers";

export class FilmDetails extends Component {
  render() {
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={{ flex: 2, flexDirection: "column", padding: 10 }}>
          <Image
            style={{flex: 1 }}
            source={{ uri: `${host}/${this.props.film.poster_path}` }}/>
        </View>
        <View style={{ flex: 3 }}>
          <View>
            <Text style={{textAlign:'center', fontWeight: 'bold'}}>
              Showing times for {this.props.selected_date.toDateString()}
            </Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'center'}}>
            {
              this.props.showings.map(showing => {
                var date = new Date(showing.showing_time);
                var dateStr = `${date.getHours()}:${date.getMinutes()}`;
                return (
                  <Text 
                    onPress={() => { this.props.chooseTime(this.props.film)}}
                    style={{textDecorationLine: 'underline', color: 'blue', marginLeft: 5, marginRight: 5}} 
                    key={showing.id}>
                    {dateStr}
                  </Text>
                );
              })
            }
          </View>
          <View>
            <Text style={{textAlign:'center', fontSize: 40, fontWeight: 'bold', marginTop: 10}}>{this.props.film.title}</Text>
            <View style={{margin:10}}>
              <Text style={{marginBottom:10}}>{this.props.film.tagline}</Text>
              <Text style={{marginBottom:10}}>{this.props.film.homepage}</Text>
              <Text>{this.props.film.overview}</Text>
              <Text>Release date: {this.props.film.release_date}</Text>
              <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:20, fontWeight:'bold', fontSize:30}}>Rating: {this.props.film.vote_average}/10</Text>
                <View style={{flex:1, justifyContent:'flex-end'}}>
                  <Text style={{marginRight:10, textAlign:'right'}}>{this.props.film.vote_count} votes</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
