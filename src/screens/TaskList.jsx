import React from "react";
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, } from "react-native";



import todayImage from '../../assets/imgs/today.jpg'

export default props =>{
    return(
        <SafeAreaView style={style.constainer}>
            <ImageBackground source={todayImage} style={style.backgroud}>
            </ImageBackground>
            <Text>TeskList</Text>

            <View style={style.taskList}>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        constainer:{
            flex:1,
        },
        backgroud: {
            flex: 3,
        },
        taskList:{
            flex: 5,
        }
    }
)
