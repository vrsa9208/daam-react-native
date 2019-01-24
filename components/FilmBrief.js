import React, { Component } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { host } from "../helpers";
import { store } from "../store/store";

export class FilmBrief extends Component {
    selectThisFilm = () => {
        store.dispatch({type:'SET_SELECTED_FILM', film: this.props.film});
        store.dispatch({type:'FETCH_SHOWINGS', film_id: this.props.film.id, selected_date: this.props.selected_date});
        store.dispatch({type:'SHOW_FILM_DETAILS'});
    };

    render() {
        return (
        <TouchableHighlight 
            style={{marginTop: 10}}
            onPress={this.selectThisFilm}>
            <View style={{flexDirection: 'row'}}>
                <Image
                    style={{ height: 100, width: 100 }}
                    source={{ uri: `${host}/${this.props.film.poster_path}` }}/>
                <View style={{flexDirection: 'column', paddingLeft: 10, flex: 1}}>
                    <Text style={{fontWeight: 'bold', fontSize: 25}}>
                        {this.props.film.title}
                    </Text>
                    <Text style={{flex: 1, fontSize: 16}}>
                        {this.props.film.tagline}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
        );
    }
}
