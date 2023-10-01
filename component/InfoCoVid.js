import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import bg from '..//assets/img/slide1.jpg';

class InfoCoVid extends Component{
    render(){
        return(
            <ScrollView style={styles.main}>
                <Image source={bg} style={{ width: 400, height: 300 }}/>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 10, borderLeftWidth: 5, paddingLeft: 10, marginTop: 10}}>Data in Vietnam</Text>
                 <View style={styles.content}>
                    <View style={styles.canhiem}>
                        <Text style={{fontWeight: 'bold', textAlign: 'center', paddingTop: 10}}>The number of cases infected</Text>
                        <Text style={{color: 'red', textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>11.526.858</Text>
                        <Text style={{textAlign: 'center', paddingBottom: 10}}>24 giờ qua +24</Text>
                    </View>
                    <View style={styles.khoibenh}>
                        <Text style={{fontWeight: 'bold', textAlign: 'center', paddingTop: 10}}>QUIT</Text>
                        <Text style={{color: '#008000', textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>10.614.735</Text>
                    </View>
                 </View>
                 <View style={styles.tuvong}>
                        <Text style={{fontWeight: 'bold', textAlign: 'center', paddingTop: 10}}>DEAD</Text>
                        <Text style={{color: '#000000', textAlign: 'center', fontSize: 20, fontWeight: 'bold', paddingBottom: 10}}>43.186</Text>
                </View>
                <View style={{borderLeftWidth: 5, marginLeft: 10, marginTop: 20}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 10}}>COVID-19 epidemic measures at home effectively</Text>
                </View>
                <View>
                    <Text style={{fontWeight: 'bold', paddingLeft: 25, paddingTop: 15, fontSize: 15}}>Social way</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>
                        Minimize direct contact with others, especially in enclosed space.Not out of the house if not really necessary.For the elderly alone, they need to keep in touch with their descendants and relatives by phone, tablet, video call application on tablets.
                    </Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>
                        Do not go out to a crowded place.Keep the contact distance over 2 meters.Store food and indoor medicine for days.
                    </Text>
                    <Text style={{fontWeight: 'bold', paddingLeft: 25, paddingTop: 15, fontSize: 15}}>Personal protection measures</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>
                    - Wearing a mask when needed to go out, do not touch the outside of the mask, do not pull down the chin so it
                    </Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>- Wash your hands often.If there is no soap and water, use a hand disinfectant to contain at least 60% alcohol.</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}> - Avoid touching your eyes, nose, and mouth without washing your hands.</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}> - When coughing or sneezing, use a paper towel or in the elbow, then wash your hands.</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>- Cleaning and disinfecting surfaces and objects often touch with a solution of at least 60% alcohol.</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>
                        - Nasal hygiene regularly, can moisturize the nose with small physiological saline solution, scoop the mouth with the regular mouth cleaning solution.
                    </Text>
                    <Text style={{fontWeight: 'bold', paddingLeft: 25, paddingTop: 15, fontSize: 15}}>Vaccination of COVID-19 room vaccine</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>
                        Injection of the COVID-19 room vaccination is an important measure, helping to prevent and reduce serious complications of COVID-19
                    </Text> 
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>
                        Studies have shown that the COVID-19 vaccines such as Astrazeneca, Pfizer or Moderna have reduced the risk of death and serious diseases caused by Covid-19, especially for the elderly.
                    </Text>                      
                </View>
            </ScrollView>
        )
    }
}

export default InfoCoVid;

const styles = StyleSheet.create({
    main:{
       backgroundColor: '#ffffff',
       height: '100%'
    },
    content:{
        flexDirection: 'row',
        marginTop: 10
    },
    canhiem:{
        backgroundColor: '#ffc0cb',
        width: 170,
        marginTop: 10,
        marginLeft: 10
    },
    khoibenh:{
        backgroundColor: '#90ee90',
        width: 170,
        marginTop: 10,
        marginLeft: 25,
        marginRight: 10
    },
    tuvong:{
        backgroundColor: '#c0c0c0',
        marginLeft: 90,
        marginRight: 90,
        marginTop: 10
    }
})