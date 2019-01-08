import React from 'react';
import {View, TouchableOpacity,Image} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Dashboard from './Dashboard';




const RouterComponent = () => {

    const { navbarStyle, titleStyle, headerTitleStyle } = styles;

    return (
    <Router navigationBarStyle={navbarStyle} titleStyle={titleStyle}>
      <Scene key="root">
        <Scene key="dashboard"  headerTitleStyle={headerTitleStyle} component={Dashboard} type="reset" />
       </Scene>
    </Router>
  );
};

const styles = {
    navbarStyle: {
        backgroundColor: '#4124b1'
    },
    backIcon:{alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', height: 36, width: 36, borderRadius: 18, borderColor: 'white'},
    headerTitleStyle: {
        flex: 2,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    titleStyle: {
        color: '#0A80F5'
    }
};

export default RouterComponent;
