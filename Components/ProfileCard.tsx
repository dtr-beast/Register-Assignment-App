import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { DataTable } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect} from "react";

export default function ProfileCard() {

    useEffect(async () => {
        console.log(JSON.parse(await AsyncStorage.getItem('@Person') as string))
    })

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                ID Card
            </Text>
            {/*<Image style={styles.logo} source={require('../assets/66115431.jpg')} />*/}
            <Text style={styles.high}>
                Full Stack Developer
            </Text>
            <DataTable style={{borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0, borderColor:"#FC5C7D"}}>
                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1.5}}><Text style={styles.paragraph}>Name:</Text></DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>Dipendra Bhardwaj</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1.5}}><Text style={styles.paragraph}>Designation:</Text></DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>Web Designer</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1.5}}><Text style={styles.paragraph}>Department:</Text></DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>BTech CS Dept.</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1.5}}><Text style={styles.paragraph}>Univ RollNo:</Text></DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>191500270</DataTable.Cell>
                </DataTable.Row>

            </DataTable>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: "bold"
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        padding: 24,
    },
    paragraph: {
        marginBottom: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginBottom: 20
    },
    high: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF8300',
        marginBottom: 20,
    }
});
