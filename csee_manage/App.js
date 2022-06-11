import React, {Component} from 'react';
import {StatusBar, SafeAreaView, StyleSheet, Text, View, Image, AppRegistry, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,Platform, SectionList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// from './CategoryButton';

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: 'pink',
  },
  header :{
    height : 80,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems: 'center',
    paddingHorizontal : 10,
    backgroundColor: '#1363DF',
  },
  headerText : {
    fontWeight : 'bold',
    fontSize : 40,
    color : '#DFF6FF',
  },
  contents :{
    flex : 1,
    paddingTop : 5,
    backgroundColor: '#DFF6FF',
  },
  category :{
    flex : 1,
    flexDirection : 'row',    
    alignItems: 'center',
    justifyContent : 'space-between',
    backgroundColor: '#47B5FF',
    paddingHorizontal : 15,
    paddingVertical : 5,
    marginVertical : 1,
    marginHorizontal : 5,
    borderRadius : 10,
  },
  categoryText :{
    fontWeight : 'bold',
    fontSize : 30,
    color : '#DFF6FF',
  },
  categoryIcon :{
    flexDirection : 'row',
    alignItems: 'center', 
    justifyContent : 'center',
  },
  data : {
    flex : 1,
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
const DATA = [
  {title: '채소', data:['토마토', '오이', '당근']},
  {title: '과일', data:['사과']},
  {title: '고기', data:['돼지고기', '소고기', '닭고기']},
  {title: '곡류', data:['쌀']},
  {title: '가공품',data:['햄', '옥수수', '참치', '김']},
  {title: '기타', data: ['빵']}
];

export default class mainScreen extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container} >
        <StatusBar
          barStyle='transparent'
         />

        <View style={styles.header}>
          <Icon name="camera" size={25} style={{paddingHorizontal : 10, paddingVertical : 5,  color: 'transparent',}}/>
          <Text style={styles.headerText}>장보고 레시피</Text>
          <Icon name="camera" size={25} style={{paddingHorizontal : 10, paddingVertical : 5,  color: 'white',}}/>
        </View>

        <View style={styles.contents}>
          <SectionList
            sections={DATA}
            renderSectionHeader={({section})=> 
                      <View style={styles.category}>
                        <Text style={styles.categoryText}>{section.title}</Text>
                        <View style={styles.categoryIcon}>
                          <Icon name="edit" size={22} style={{paddingHorizontal : 10, paddingVertical : 5,  color: 'white',}}/>
                          <Icon name="trash" size={22} style={{paddingHorizontal : 10, paddingVertical : 5, color: 'white',}}/>
                        </View>
                      </View>
                      }
            renderItem={({item})=> 
                      <View style={styles.data}>
                        <Text style={styles.dataText}>{item}</Text>
                      </View>
                      }
            keyExtractor={(item, index)=>index}
            />
        </View>
      </SafeAreaView>
    );
  }
};