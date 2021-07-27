import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import FoodList from '../components/FoodList'
import {styles} from '../style/mainPageStyle'
const MainPage = () => {
    const [showModal, setShowModal] = useState(false)
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setShowModal(true)} style={styles.btn}>      
                <Text style={styles.text}>Show Food List</Text>
            </TouchableOpacity>
            {showModal &&
              <FoodList
                hideModal={() => setShowModal(false)}
              />
            }
        </View>
    )
}

export default MainPage;