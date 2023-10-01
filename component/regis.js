import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, Modal, Pressable } from 'react-native';
import bg from '../assets/img/bg-reg.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { NetworkInfo } from "react-native-network-info";

class RegisScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
        name:'',
        username: '',
        password: '',
        modalVisible: false,
        errModal: false,
    }
}

handleRegis = () => {
  //ip wifi hiện tại đang sử dụng
  axios.post(`http://192.168.1.15:9000/regpt`,{
    name:this.state.name,
    username:this.state.username,
    password:this.state.password
  })
  .then(res => {
      if (res.data === "Failed") {
        this.setState({errModal: true})
      }else{
        this.setState({modalVisible: true})
      }
  })
  .catch(function (err){
      console.log(err);
  })
}

  render(){
    const {modalVisible} = this.state;
    const {errModal} = this.state;
    return (
      <ImageBackground source={bg} resizeMode="cover" style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>ACCOUNT REGISTRATION</Text>
        </View>
        <View style={styles.form}>
          <TextInput style={styles.usn} placeholder='User name' name='name' onChangeText={(text) => {this.setState({name: text})}}/>
        </View>
        <View style={styles.form2}>
          <TextInput style={styles.usn} placeholder='Account name' name='username' onChangeText={(text) => {this.setState({username: text})}}/>
        </View>
        <View style={styles.form2}>
          <TextInput style={styles.usn} secureTextEntry  placeholder='Password' name='password' onChangeText={(text) => {this.setState({password: text})}}/>
        </View>
        <View style={styles.form2}>
          <Button title='Register' onPress={() => {this.handleRegis()}}/>
        </View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.setState({modalVisible: !modalVisible});
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Icon 
                name='check-circle'
                color="#5cb85c"
                style={{marginBottom: 10, fontSize: 70}}
              />
              <Text style={styles.modalText}>Successful account registration</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.props.navigation.navigate('Patient')}>
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
            animationType="slide"
            transparent={true}
            visible={errModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.setState({errModal: !errModal});
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Icon 
                name='exclamation-circle'
                color="#ff0000"
                style={{marginBottom: 10, fontSize: 70}}
              />
              <Text style={styles.modalText}>+THIS ACCOUNT HAS ALREADY EXISTED</Text>
              <Pressable
                style={[styles.button, styles.buttonClose2]}
                onPress={() => this.setState({errModal: !errModal})}>
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>        
      </ImageBackground>
    );
  }
}

export default RegisScreen;

const styles = StyleSheet.create({
    centeredView: {
      marginTop: 207,
    },
    main:{
        backgroundColor: '#ffffff',
        height: 900
    },
    container:{
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200,
    },
    logo:{
        width: 110,
        height: 95
    },
    title:{
        marginTop: 10,
        fontSize: 25,
        color: '#1e90ff',
        fontWeight: 'bold',
    }, 
    form:{
        marginTop: 50,
        paddingLeft: 50,
        paddingRight: 50,
    }, 
    form2:{
        marginTop: 25,
        paddingLeft: 50,
        paddingRight: 50,
    }, 
    usn:{
        borderWidth: 1,
        height: 50,
        borderColor: '#1e90ff',
        padding: 10,
        borderRadius: 7
    }, 
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      padding: 35,
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,

      elevation: 18,
    },
    button: {
      borderRadius: 20,
      padding: 7,
      width: 200,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#5cb85c',
    },
    buttonClose2: {
      backgroundColor: '#ff0000',
    },
    textStyle: {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontWeight: '900'
    },   
})