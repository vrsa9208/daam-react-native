import React, { Component } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { Table } from "./Table";
const tables = require('../mock/tables.json');

export class PickSeats extends Component {

  render() {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
                <Text>Choose your seats for</Text>
                <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>Movie Title</Text>
                <Text>on</Text>
                <Text>Saturday, January 23, 2020</Text>
                <Text>at 3:30 pm</Text>
            </View>
            <View style={{ flex: 1, margin:10, borderColor:'#ABABFF', borderWidth: 3, borderRadius: 10 }}>
                <ScrollView>
                    {
                        tables.map(table => {
                            return (
                                <Table table={table} key={table.id} />
                            );
                        })
                    }
                </ScrollView>
            </View>
            <View style={{justifyContent:'flex-end', flexDirection:'row', marginRight:10, marginBottom: 20}}>
                <View style={{width: 200}}>
                    <Button
                        title='Check out'
                        onPress={() => {this.props.navigation.navigate('Checkout', {selected_film: this.props.navigation.state.params.selected_film})}}/>
                </View>
            </View>
        </View>
    );
  }
}
