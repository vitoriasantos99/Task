import React from "react";
import { View, Text, StyleSheet } from "react-native";

import commonStyle from "../commonStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from 'moment'
import 'moment/locale/pt-br'

export default props => {
    return(
        <View style={style.container}>
            <View>
                <Text>Conluido</Text>
            </View>
            <View>
                <Text>Tasks</Text>
                <Text>Tasks</Text>
            </View>
        </View>
    )
}

function getCheckView(concluidaEm) {
    if (concluidaEm != null){
        return(
            <View style={style.dataEstimada}>
                <Icon name="check" size={20} color='#FFF'/>
            </View>
        )
    } else {
        return(
            <View style={style.pendente}>
                <Text style={[style.descricao, tarefaConcluidaNao]}>{props.descricao}</Text>
                <Text style={style.date}>{dateFormat}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create(
    {
        container:{
            flexDirection: 'row',
            borderColor: '#2C2C2C',
            borderBottomWidth: 1,
            alignItems: 'center',
            paddingVertical: 10,
        },
        checkContainer:{
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        dataEstimada:{
            height: 25,
            width: 25,
            borderRadius: 13,
            borderWidth: 1,
            backgroundColor: '#4D7031',
            alignItems: 'center',
            justifyContent: 'center',
        },
        pendente:{
            height: 25,
            width: 25,
            borderRadius: 13,
            borderWidth: 1,
            borderColor: '#555',
        },
        descricao:{
            color: commonStyle.colors.mainText,
            fontSize: 15,
        },
        date:{
            fontFamily: commonStyle.fontFamily,
            color: commonStyle. colors.subText,
            fontSize: 12,
        },
    }
)