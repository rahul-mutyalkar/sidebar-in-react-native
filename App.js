/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import SideMenu from 'react-native-side-menu';
import Router from './Router';
var pubsub = require('pubsub.js');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
      'u'
});
const Props = {};
export default class App extends Component < Props > {
  state = {
    isOpen: false,
    selectedItem: 'About'
  }
  constructor(props){
    super(props);
    this.state =  {
      isOpen: false,
      selectedItem: 'About'
    }
    pubsub.subscribe('openMenu',()=>{
      this.toggleMenu();    
    })
  }
  
  toggleMenu()
  {
    this.setState({isOpen:true})

  }
  render() {
    const menu = <Menu/>;
    return (
      <SideMenu 
      autoClosing={true} 
      // disableGestures={true} 
      menu={menu}
      isOpen={this.state.isOpen}
      >
       <Router />

      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

module.exports = App;
