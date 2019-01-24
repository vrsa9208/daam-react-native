import React, { Component } from 'react';
import { View, Text} from 'react-native';

export class Table extends Component {

    render(){
        return (
            <View style={{ padding: 10}}>
                <Text style={{fontWeight:'bold', fontSize: 30}}>Table {this.props.table.table_number}</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                    {
                        this.props.table.seats.map(seat => {
                            return (
                                <View key={seat._id} style={{minWidth: 100, margin: 10}}>
                                    <Text style={{textAlign:'center', fontSize:18}}>Seat {seat.seat_number}</Text>
                                </View>
                            );
                        })
                    }
                </View>
            </View>
        );
    }
}