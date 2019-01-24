import React, { Component } from 'react';
import { View, DatePickerAndroid, Button, Platform, DatePickerIOS } from 'react-native';
import { store } from '../store/store';

export class DatePicker extends Component {
    constructor() {
        super();
        this.state = {
            ...store.getState(),
            showIOSPicker: false
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {...store.getState()};
    }

    showModal = () => {
        if(Platform.OS === 'android'){
            DatePickerAndroid.open({
                date: this.state.selected_date
            }).then(({action, month, day, year}) => {
                if (action !== DatePickerAndroid.dismissedAction) {
                    store.dispatch({type: 'SET_SELECTED_DATE', date: new Date(year, month, day)});
                }
            });
        }
        if(Platform.OS === 'ios'){
            this.setState({...this.state, showIOSPicker: !this.state.showIOSPicker});
        }
    };

    setDate = (date) => {
        store.dispatch({type: 'SET_SELECTED_DATE', date: date});
        this.setState({...this.state, showIOSPicker: false});
    }

    render() {
        return (
            <View>
                <Button
                    onPress={this.showModal}
                    title={`Showing times for ${this.state.selected_date.toDateString()}`} />
                {
                    Platform.OS === 'ios' &&
                    this.state.showIOSPicker &&
                    <DatePickerIOS
                        date={this.state.selected_date}
                        onDateChange={this.setDate}
                        mode="date" />
                }
            </View>
            
        );
    }
}