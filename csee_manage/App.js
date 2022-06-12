import React, {Component, useEffect, useState} from 'react';
import {TextInput, Button, ScrollView, StatusBar, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Task from './task';
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
  inputview :{
    flexDirection : 'row',    
    alignItems: 'center',
    justifyContent : 'space-between',
    margin : 5,
    paddingHorizontal : 15,
  },
  inputtext :{
    flex :1,
    fontWeight : 'bold',
    fontSize : 15,
    color : '#06283D',
    backgroundColor: 'white',
    paddingHorizontal : 15,
    marginRight : 5,
    paddingVertical:2,
  },
});

const mainScreen= (props)=>{   
  const [vegetable, setVegetable]=useState({
      1: {id: 1, text:'토마토'},
      2: {id: 2, text: '오이'},
      
  });
  const [seafood, setSeafood]=useState({
    1: {id: 1, text:'갈치'},
    2: {id: 2, text:'고등어'},
    
  });
  const [meat, setMeat]=useState({
      1: {id: 1, text:'돼지고기'},
      2: {id: 2, text:'소고기'},
      
  });
  const [processed_food, setProcessed_food]=useState({
      1: {id: 1, text:'참치'},
  });
  const [etc, setEtc]=useState({
      1: {id: 1, text:'빵'},
      
  });
  const [newVege, setNewVege] = useState('');
  const [newMeat, setNewMeat] = useState('');
  const [newSea, setNewSea] = useState('');
  const [newPrd, setNewPrd] = useState('');
  const [newEtc, setNewEtc] = useState('');

  const submitHandler = (val) => {
    const ID=Date.now().toString();
    let newFoodObject;
    if(val=='채소'){
      newFoodObject = {
        [ID]: { id: ID, text: newVege },
      };
      setNewVege('');
        setVegetable({ ...vegetable, ...newFoodObject });
    }else if(props.val=='해산물'){
      newFoodObject = {
        [ID]: { id: ID, text: newSea },
      };
      setNewSea('');
        setSeafood({ ...seafood, ...newFoodObject });
    }else if(props.val=='육류'){
      newFoodObject = {
        [ID]: { id: ID, text: newMeat },
      };
      setNewMeat('');
        setMeat({ ...meat, ...newFoodObject });
    }else if(val=='가공식품'){
      newFoodObject = {
        [ID]: { id: ID, text: newPrd },
      };
      setNewPrd('');
        setProcessed_food({ ...processed_food, ...newFoodObject });
    }else{
      newFoodObject = {
        [ID]: { id: ID, text: newEtc },
      };
      setNewEtc('');
        setEtc({ ...etc, ...newFoodObject });
    }
  };

  const deleteVege = (id) => {
    let currentFood;
    currentFood = Object.assign({}, vegetable);
    delete currentFood[id];
    setVegetable(currentFood);
  };
  const deleteSea = (id) => {
    let currentFood;
    currentFood = Object.assign({}, seafood);
    delete currentFood[id];
    setSeafood(currentFood);
  };
  const deleteMeat = (id) => {
    let currentFood;
    currentFood = Object.assign({}, meat);
    delete currentFood[id];
    setMeat(currentFood);
  };
  const deletePrd = (id) => {
    let currentFood;
    currentFood = Object.assign({}, processed_food);
    delete currentFood[id];
    setProcessed_food(currentFood);
  };
  const deleteEtc = (id) => {
    let currentFood;
    currentFood = Object.assign({}, etc);
    delete currentFood[id];
    setEtc(currentFood);
  };

    return (
      <SafeAreaView style={styles.container} >
        <StatusBar
          barStyle='transparent'
         />

        <View style={styles.header}>
          <Icon name="camera" size={25} style={{paddingHorizontal : 10, paddingVertical : 5,  color: 'transparent',}}/>
          <Text style={styles.headerText}>장보고 냉장고</Text>
          <Icon name="camera" size={25} style={{paddingHorizontal : 10, paddingVertical : 5,  color: 'white', }}/>
        </View>
        
        <ScrollView style={styles.contents}>
        <View>
          <View style={styles.category}>
              <Text style={styles.categoryText}>채소</Text>
          </View>
          <View style={styles.inputview}>
              <Icon name="chevrons-right" size={22}  style={{paddingVertical : 5,  color: '#1363DF' }}/>
              <TextInput
                style={styles.inputtext}
                placeholder="식품을 입력하세요"
                placeholderTextColor={'#999'}
                value={newVege}
                onChangeText={(text)=>setNewVege(text)}
                autoCorrect={false}
              />
              <View style={{backgroundColor:'#47B5FF'}}>
                  <Button title={'ENTER'} onPress={()=>submitHandler('채소')}/> 
              </View>
          </View>
          <View style={{flexDirection:'column'}}>
              { Object.values(vegetable).map((item) => (
                    <Task key={item.id} item={item}  deleteFood={deleteVege} />                  
              ))}
          </View>
        </View>
        <View>
          <View style={styles.category}>
              <Text style={styles.categoryText}>해산물</Text>
          </View>
          <View style={styles.inputview}>
              <Icon name="chevrons-right" size={22}  style={{paddingVertical : 5,  color: '#1363DF' }}/>
              <TextInput
                style={styles.inputtext}
                placeholder="식품을 입력하세요"
                placeholderTextColor={'#999'}
                value={newSea}
                onChangeText={(text)=>setNewSea(text)}
                autoCorrect={false}
              />
              <View style={{backgroundColor:'#47B5FF'}}>
                  <Button title={'ENTER'} onPress={()=>submitHandler('해산물')}/> 
              </View>
          </View>
          <View style={{flexDirection:'column'}}>
              { Object.values(seafood).map((item) => (
                    <Task key={item.id} item={item}  deleteFood={deleteSea} />
              ))}
          </View>
        </View>
        <View>
          <View style={styles.category}>
              <Text style={styles.categoryText}>육류</Text>
          </View>
          <View style={styles.inputview}>
              <Icon name="chevrons-right" size={22}  style={{paddingVertical : 5,  color: '#1363DF' }}/>
              <TextInput
                style={styles.inputtext}
                placeholder="식품을 입력하세요"
                placeholderTextColor={'#999'}
                value={newMeat}
                onChangeText={(text)=>setNewMeat(text)}
                autoCorrect={false}
              />
              <View style={{backgroundColor:'#47B5FF'}}>
                  <Button title={'ENTER'} onPress={()=>submitHandler('육류')}/> 
              </View>
          </View>
          <View style={{flexDirection:'column'}}>
              { Object.values(meat).map((item) => (

                    <Task key={item.id} item={item}  deleteFood={deleteMeat} />
              ))}
          </View>
        </View>
        <View>
          <View style={styles.category}>
              <Text style={styles.categoryText}>가공식품</Text>
          </View>
          <View style={styles.inputview}>
              <Icon name="chevrons-right" size={22}  style={{paddingVertical : 5,  color: '#1363DF' }}/>
              <TextInput
                style={styles.inputtext}
                placeholder="식품을 입력하세요"
                placeholderTextColor={'#999'}
                value={newPrd}
                onChangeText={(text)=>setNewPrd(text)}
                autoCorrect={false}
              />
              <View style={{backgroundColor:'#47B5FF'}}>
                  <Button title={'ENTER'} onPress={()=>submitHandler('가공식품')}/> 
              </View>
          </View>
          <View style={{flexDirection:'column'}}>
              { Object.values(processed_food).map((item) => (
                    <Task key={item.id} item={item}  deleteFood={deletePrd} />  
              ))}
          </View>
        </View>
        <View>
          <View style={styles.category}>
              <Text style={styles.categoryText}>기타</Text>
          </View>
          <View style={styles.inputview}>
              <Icon name="chevrons-right" size={22}  style={{paddingVertical : 5,  color: '#1363DF' }}/>
              <TextInput
                style={styles.inputtext}
                placeholder="식품을 입력하세요"
                placeholderTextColor={'#999'}
                value={newEtc}
                onChangeText={(text)=>setNewEtc(text)}
                autoCorrect={false}
              />
              <View style={{backgroundColor:'#47B5FF'}}>
                  <Button title={'ENTER'} onPress={()=>submitHandler('기타')}/> 
              </View>
          </View>
          <View style={{flexDirection:'column'}}>
              { Object.values(etc).map((item) => (
                    <Task key={item.id} item={item} deleteFood={deleteEtc} />                  
              ))}
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  
};
export default mainScreen;
