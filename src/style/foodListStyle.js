import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#e0e0eb',
      position: 'absolute',
      top: 0
    },
    mainView: {
      flex: 1,
      paddingHorizontal: 28,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 20,
    },
    searchBar: {
      width: '100%',
      height: 50, 
      backgroundColor: '#e6eeff',  
      borderRadius: 4, 
      paddingHorizontal: 8, 
      marginTop: 30,
      flexDirection: 'row',
      alignItems: 'center'
  },
  searchIcon: {
      height: 18,
      width: 18,
      marginRight: 4
  },
    searchText: {width: '100%',
     height: '100%',
  },
    cardContainer: {
      height: 50,
      width: '100%',
      borderRadius: 4,
      backgroundColor: 'white',
      marginTop: 12,
      flexDirection: 'row',
      paddingHorizontal: 6,
      alignItems: 'center',
    },
    cardImgContainer: {
      height: 38,
      width: 38,
      borderRadius: 4,
      backgroundColor: 'pink',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardImg: {
      height: 18,
      width: 18,
    },
    crossIcon: {
      height: 14,
      width: 14,
      marginTop: 6
    },
    dropDownIcon: {
      height: 16,
      width: 16,
      position: 'absolute',
      right: 10,
    },
    cardTitle: {
      marginLeft: 8,
      fontWeight: 'bold',
    },
    cardSubTitle: {
      color: 'black',
      marginLeft: 4,
    },
    anotherView:{
      height: 54,
      marginTop: 12, 
      justifyContent: 'center', 
      borderRadius: 8,  
      width: '100%', 
      backgroundColor: '#1a8cff', 
      paddingHorizontal: 12
  },
   topText:{
      fontSize: 12, 
      color: 'white'
  },
   secondText: {
      fontSize: 12,
       marginTop: 4, 
       color: 'white'
   },
   bottomMessage: {
      width: '100%',
      height: 60, 
      backgroundColor: '#FFF',
      paddingHorizontal: 8, 
      flexDirection: 'row',
      alignItems: 'center'
   }
  
  });