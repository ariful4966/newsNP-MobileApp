//import liraries
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

// create a component
const NewsList = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.categoryTitle}>Category</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    headerContainer:{
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: StatusBar.currentHeight,
        backgroundColor:'#4e4d4d'
    },
    categoryTitle:{
        fontSize:20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white'
    }
});

//make this component available to the app
export default NewsList;
