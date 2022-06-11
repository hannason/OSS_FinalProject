import React, {Component, useEffect, useState} from 'react';
import {TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const styles = StyleSheet.create({
    data : {
        flex : 1,
        justifyContent : 'space-around',
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
const IconButton = ({ onPressOut, id }) => {

    return(
        <TouchableOpacity  style={{paddingHorizontal : 10, paddingVertical : 5, color: 'white',}} onPressOut={()=>{onPressOut(id);}}>
            <Icon name="trash"  size={22} />
        </TouchableOpacity>
    )
}
export default IconButton;
