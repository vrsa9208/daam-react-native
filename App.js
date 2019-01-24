import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Landing } from './components/Landing';
import { Checkout } from './components/Checkout';
import { store } from './store/store';
import { PickSeats } from './components/PickSeats';
import { createStackNavigator, createNavigationContainer } from 'react-navigation';
import { Ticket } from './components/Ticket';

const routes = {
  Landing: Landing,
  PickSeats: PickSeats,
  Checkout: Checkout,
  Ticket: Ticket
};

const stackNavConfig = {
  initialRouteName: "Landing",
  navigationOptions: {
    headerStyle: {
      backgroundColor: "rgb(11, 134, 232)" // Or whatever color you like
    },
    headerTintColor: "rgb(17, 190, 255)", // For the back/forward buttons
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
};


const stackNav = createStackNavigator(routes, stackNavConfig);
const MyStackNavigator = createNavigationContainer(stackNav);

export default class App extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }

  componentDidMount() {
    store.dispatch({type: 'FETCH_FILMS'});
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          hidden={true} />
        <MyStackNavigator />
      </SafeAreaView>
    );
  }
}
