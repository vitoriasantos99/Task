import React from "react";
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, } from "react-native";

import todayImage from '../../assets/imgs/today.jpg'
import commonStyle from "../commonStyle";
import moment from 'moment'
import 'moment/locale/pt-br'

import Task from "../components/Task";

export default props =>{

    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return(
        <SafeAreaView style={style.constainer}>
            <ImageBackground source={todayImage} style={style.backgroud}>
                <View style={style.titleBar}>
                    <Text style={style.title}>Hoje</Text>
                    <Text style={style.subTitle}>{today}</Text>
                </View>            
            </ImageBackground>

            <View style={style.taskList}>
                <Task/>
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
        },
        titleBar:{
            flex: 1,
            justifyContent: 'flex-end'
        },
        title:{
            fontFamily: commonStyle.fontFamily,
            fontSize: 50,
            color: commonStyle.colors.secundary,
            marginLeft: 20,
            marginBottom: 20,
        },
        subTitle:{
            fontFamily: commonStyle.fontFamily,
            fontSize: 20,
            color: commonStyle.colors.secundary,
            marginLeft: 20,
            marginBottom: 20,
        },
    }
)
