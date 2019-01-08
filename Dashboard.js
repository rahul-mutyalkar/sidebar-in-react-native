import React from 'react';
import { View, Text, ScrollView, AsyncStorage, ImageBackground, ActivityIndicator, Image, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
var pubsub = require('pubsub.js');

export default class Dashboard extends React.Component {

    state= {
        token:null,
        ritualList:[],
        ritualStatus:false,
        professionalList:[],
        internetStatus:true,
        professionalStatus:false,
    }

    constructor(props) {
        super(props);
        // console.log('strings : ',strings,strings('login.welcome'))
     
        // this.subscribeTopic();
        // console.log('this.ritualsService : ',this.ritualsService)
        // console.log('this.aclService : ',this.aclService)
    }

    componentDidMount() {
        console.log('componentDidMount()')
        
    }
    openMenu()
    {
        pubsub.publish('openMenu');
    }



    render() {
        // console.log('render :',this.state)
                return (
                    <View style={{ flex: 1, backgroundColor: '#fff',justifyContent:'center',alignItems:'center' }}>
                    <TouchableOpacity style={{borderWidth:1,padding:10,width:100,textAlign:'center'}} onPress={()=>{this.openMenu()}}>
                        <Text style={{textAlign:'center'}}>open menu</Text>
                    </TouchableOpacity>
                  </View>   
        );
    }
}
