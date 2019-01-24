import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

export class Header extends Component {

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Image
                    style={{width: 70, height: 70}}
                    source={require('../assets/daam.png')} />
                <View style={{justifyContent: 'center', alignContent: 'center', flex: 250, padding: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 30}}>
                        Dinner And A Movie
                    </Text>
                </View>
            </View>
        );
    }
}