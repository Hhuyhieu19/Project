import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import vi from '../languages/vn';
import en from '../languages/en';

export default function Setting({ navigation }) {
    const [language, setLanguage] = useState('vi'); // mặc định là tiếng Việt
    const translations = language === 'vi' ? vi : en;

    return (
        <View style={styles.main}>
            <View style={styles.head}>
                <Text style={{ paddingLeft: 5, fontSize: 30 }}>{translations.setting}</Text>
            </View>
            <View style={styles.container}>
                <Button 
                    title={translations.profile} 
                    onPress={() => navigation.navigate('Account')} 
                />
            </View>
            <View style={styles.container}>
                <Button title={translations.logout} />
            </View>
            <View style={styles.container}>
                <Picker
                    selectedValue={language}
                    onValueChange={(itemValue) => setLanguage(itemValue)}
                >
                    <Picker.Item label="Tiếng Việt" value="vi" />
                    <Picker.Item label="English" value="en" />
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#ffffff',
        height: '100%'
    },
    head: {
        borderLeftWidth: 5,
        borderLeftColor: '#000000',
        marginTop: 70,
        marginLeft: 30
    },
    container: {
        marginTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
    }
});
