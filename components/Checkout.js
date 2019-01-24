import React, { Component } from "react";
import { View, ScrollView, Text, TextInput, KeyboardAvoidingView, Button } from "react-native";

export class Checkout extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
            <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>Checkout</Text>
            <Text style={{fontSize: 18}}>Your cart:</Text>
        </View>
        <View style={{ flex: 1, margin:10, borderColor:'#ABABFF', borderWidth: 3, borderRadius: 10 }}>
            <ScrollView>
                <View style={{flexDirection: 'row', paddingLeft:10, paddingRight: 30, paddingTop: 5}}>
                  <Text style={{flex:1}}>Table 10, Seat 3</Text>
                  <Text style={{flex:1, textAlign: 'right'}}>$12.00</Text>
                </View>

                <View style={{flexDirection: 'row', paddingLeft:10, paddingRight: 30, paddingTop: 5}}>
                  <Text style={{flex:1}}>Table 10, Seat 4</Text>
                  <Text style={{flex:1, textAlign: 'right'}}>$12.00</Text>
                </View>

                <View style={{flexDirection: 'row', paddingLeft:10, paddingRight: 30, paddingTop: 5}}>
                  <Text style={{flex:1}}>Table 10, Seat 5</Text>
                  <Text style={{flex:1, textAlign: 'right'}}>$12.00</Text>
                </View>

                <View style={{flexDirection: 'row', paddingLeft:10, paddingRight: 30, paddingTop: 5}}>
                  <Text style={{flex:1, textAlign: 'right', paddingTop: 5}}>Subtotal</Text>
                  <Text style={{flex:1, textAlign: 'right', paddingTop: 5}}>$36.00</Text>
                </View>

                <View style={{flexDirection: 'row', paddingLeft:10, paddingRight: 30, paddingTop: 5}}>
                  <Text style={{flex:1, textAlign: 'right'}}>Tax</Text>
                  <Text style={{flex:1, textAlign: 'right'}}>$3.02</Text>
                </View>

                <View style={{flexDirection: 'row', paddingLeft:10, paddingRight: 30, paddingTop: 5}}>
                  <Text style={{flex:1, textAlign: 'right', paddingTop: 5}}>Total</Text>
                  <Text style={{flex:1, textAlign: 'right', paddingTop: 5}}>$39.02</Text>
                </View>
            </ScrollView>
        </View>
        <View style={{ flex: 2 }}>
            <ScrollView>
              <View style={{padding: 10}}>
                <Text style={{marginTop: 10}}>First Name</Text>
                <TextInput style={{borderColor: '#ABABAB', borderWidth: 1, borderRadius: 5, height: 30, paddingLeft: 5}} placeholder="First Name" />
                <Text style={{marginTop: 10}}>Last Name</Text>
                <TextInput style={{borderColor: '#ABABAB', borderWidth: 1, borderRadius: 5, height: 30, paddingLeft: 5}} placeholder="Last Name" />
                <Text style={{marginTop: 10}}>Credit Card</Text>
                <TextInput style={{borderColor: '#ABABAB', borderWidth: 1, borderRadius: 5, height: 30, paddingLeft: 5}} placeholder="Credit Card" keyboardType="numeric" />
                <Text style={{marginTop: 10}}>E-mail</Text>
                <TextInput style={{borderColor: '#ABABAB', borderWidth: 1, borderRadius: 5, height: 30, paddingLeft: 5}} placeholder="E-mail" keyboardType="email-address" />
                <Text style={{marginTop: 10}}>Phone</Text>
                <TextInput style={{borderColor: '#ABABAB', borderWidth: 1, borderRadius: 5, height: 30, paddingLeft: 5}} placeholder="Phone" keyboardType="phone-pad" />
              </View>
            </ScrollView>
        </View>
        <View style={{justifyContent:'flex-end', flexDirection:'row', marginRight:10, marginBottom: 20}}>
            <View style={{width: 200}}>
                <Button
                    title='Purchase'
                    onPress={() => {this.props.navigation.navigate('Ticket', {selected_film: this.props.navigation.state.params.selected_film})}}/>
            </View>
        </View>
      </View>
    );
  }
}
