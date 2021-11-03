//import liraries
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// create a component
const ViewMore = ({style}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>View More</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:8,
        width:"100%",
        height:50,
        backgroundColor: '#ffffff',
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7a74e0'
    }
});

//make this component available to the app
export default ViewMore;
