import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './Header';
import { FilmBrief } from './FilmBrief';
import Barcode from 'react-native-barcode-builder';

export class Ticket extends Component {
    getBarcodeValue = () => {
        return 50000 + (Math.random() * 950000);
    };

    render(){
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Header />
                <Text style={{margin: 10, fontSize: 20}}>We're looking forward to seeing you
                    soon. Please show this to the host when you arrive. This is your
                    ticket.
                </Text>
                <View style={{marginTop:10}}>
                    <FilmBrief film={this.props.navigation.state.params.selected_film} />
                    <Text style={{textAlign: 'center', marginTop: 10}}>{this.props.navigation.state.params.selected_film.release_date}</Text>
                </View>
                <View style={{marginTop:10}}>
                    <Barcode value={`${this.getBarcodeValue()}`} format="CODE128" />
                </View>
            </View>
        );
    }
}