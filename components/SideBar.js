import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

class Sidebar extends React.Component {
    state = {
        routes:[
            {
                name:"Home",
                icon:"ios-home"
            },
            {
                name:"ReactJs",
                icon:"ios-settings"
            },
            {
                name:"Python",
                icon:"ios-settings"
            },
            {
              name:"MachineLearning",
              icon:"ios-settings"
            },
            {
              name:"Java",
              icon:"ios-settings"
            },
            {
              name:"BlockChain",
              icon:"ios-settings"
            }
        ]
    }
  
    
    render(){
        return (
            <View style={styles.container}>
                <Image source={require("../assets/profile.png")} style={styles.profileImg}/>
                <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Vipul Ashawa</Text>
                <Text style={{color:"gray",marginBottom:10}}>hivipulhere203@gmail.com</Text>
                <View style={styles.sidebarDivider}></View>
                <FlatList
                    style={{width:"100%",marginLeft:30}}
                    data={this.state.routes}
                    renderItem={({ item }) => <Item  item={item} navigate={this.props.navigation.navigate}/>}
                    keyExtractor={item => item.name}
                />
            </View>
        )
    }
  }

  function Item({ item, navigate }) {
    return (
      <TouchableOpacity style={styles.listItem} onPress={()=>navigate(item.name)}>
        <Ionicons name={item.icon} size={32} />
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  export default Sidebar;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      paddingTop:40,
      alignItems:"center",
      flex:1
  
    },
    listItem:{
        height:60,
        alignItems:"center",
        flexDirection:"row",
    },
    title:{
        fontSize:18,
        marginLeft:20
    },
    header:{
      width:"100%",
      height:60,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      paddingHorizontal:20
    },
    profileImg:{
      width:80,
      height:80,
      borderRadius:40,
      marginTop:20
    },
    sidebarDivider:{
      height:1,
      width:"100%",
      backgroundColor:"lightgray",
      marginVertical:10
    }
  });