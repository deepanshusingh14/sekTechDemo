import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';
import {colors, textColor, iconArr, API_URL} from '../utils/utils'
import {styles} from '../style/foodListStyle'
function FoodList(props) {
  const [foodList, setFoodList] = useState([]); // state
  const [searchText, setSearchText] = useState(""); // state
  const [activeIndex, setActiveIndex] = useState(-1); // state
  
  useEffect(async() => {
    const data = await AsyncStorage.getItem('API_DATA');
    if (data !== null) {
      setFoodList(JSON.parse(data))
    } else {
      axios 
      .get(API_URL)
      .then(resp => {
        AsyncStorage.setItem('API_DATA', JSON.stringify(resp.data.data))
        setFoodList(resp.data.data);
      });
    }

  }, []);

  const getFilterData = () => {
    const _foodList = foodList.filter((item, index) => {
        if (item.title.includes(searchText)) {
            return item;
        }
    })
    return _foodList;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <TouchableOpacity onPress={() => props.hideModal()}>
          <Image
            style={styles.crossIcon}
            source={require('../assets/close.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{position: 'absolute', right: 20, height: 50, width: 50, borderRadius: 30, backgroundColor:  '#0073e6', justifyContent: 'center', alignItems: 'center'}}>
            <Image
                style={{height: 25, width: 25}}
                source={require('../assets/chat.png')}
            />
        </TouchableOpacity>
        <Text style={styles.title}>Approved Foods List</Text>

         <View style={styles.searchBar}>
            <Image
              style={styles.searchIcon}
              source={require('../assets/search.png')}
            />
            <TextInput
                style={styles.searchText}
                placeholder={'Try Searching fat, sauces names...'}
                onChangeText={(text) => setSearchText(text)}
            />
         </View> 

        <FlatList
            data={getFilterData()}
            renderItem={(item) => {
                return (
                  <View>
                    <TouchableOpacity onPress={() => {
                        if (activeIndex === item.index) {
                            setActiveIndex(-1)
                        } else {
                            setActiveIndex(item.index)
                        }
                        }} style={styles.cardContainer}>
                        <View style={[styles.cardImgContainer, { backgroundColor: colors[item.index]}]}>
                        <Image
                            style={styles.cardImg}
                            source={iconArr[item.index]}
                        />
                        </View>
                        <Text style={[styles.cardTitle, {color: textColor[item.index]}]}>{item.item.title}</Text>
                        <Text style={styles.cardSubTitle}>(4 Oz Servings)</Text>
                        <Image
                        style={styles.dropDownIcon}
                        source={activeIndex === item.index ?  require('../assets/downDownUp.png') : require('../assets/downDown.png')}
                        />
                    </TouchableOpacity>
                    {activeIndex === item.index &&
                        item.item.data.map((item, index) => {
                            return (
                                <View style={{backgroundColor: '#f2f2f2', height: 40, borderBottomWidth: 0.3, borderBottomColor: 'grey',  justifyContent: 'center', paddingLeft: 8}}>
                                    <Text>{item.title}</Text>
                                </View>
                            )
                        })
                    }
                    {activeIndex === item.index &&
                        <View style={styles.bottomMessage}>
                            <View style={{height: 40, width: '100%', borderRadius: 6, backgroundColor: '#e6eeff',  justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: 'black', opacity:  0.6, fontSize: 11}}>
                                    "When eating salmon, reduce the amount of 3oz"
                                </Text>
                            </View>
                        </View> 
                     }
                    {activeIndex === item.index &&
                        <View style={styles.anotherView}>
                            <Text style={styles.topText}>Tip</Text>
                            <Text style={styles.secondText}>Lean Lunch Meat (93% lean or more) is appropiate</Text>
                        </View>
                    }
                </View>
                )
            }}
        />
      </View>
    </SafeAreaView>
  );
}

export default FoodList;
