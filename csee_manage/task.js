import React, {Component, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import IconButton from './IconButton'
const styles = StyleSheet.create({
    data : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor: '#DFF6FF',
        paddingHorizontal : 15,
        paddingVertical : 2,
        marginVertical : 1,
        marginHorizontal : 5,
    },
    dataText : {
        fontSize : 20,
        color : '#06283D',
        fontWeight : 'bold',
    },
});
const Task = ({ item, deleteFood })=>{

    IconButton.defaultProps = {
        onPressOut: () => {},
      };
    return(
        <View style={styles.data}>
            <Text style={styles.dataText}>{item.text}</Text>
            <IconButton id={item.id} onPressOut={deleteFood} />
        </View>
    )
}
export default Task;
