import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {DataTable} from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";

interface Person {
    address: string,
    email: string,
    name: string,
    number: string,
    sex: string
}

export default function Profile() {
    const [person, setPerson] = useState<Person | null>(null)

    async function loadProfile() {
        const person: Person = JSON.parse(await AsyncStorage.getItem('@Person') as string)
        return person
    }

    // const [displayPicture, setDisplayPicture] = useState('../assets/None.webp')
    useEffect(() => {
        loadProfile()
            .then((loadedPerson) => {
                if (loadedPerson) {
                    setPerson(loadedPerson)
                    // if (person?.sex === 'Male') {
                    //     setDisplayPicture('../assets/Male.webp')
                    // } else if (person?.sex === 'Female') {
                    //     setDisplayPicture('../assets/Female.webp')
                    // }
                }
            })
    })

    return (
        <View style={styles.container}>

            {/*<Image style={styles.logo}*/}
            {/*       source={require(person?.sex ? `../assets/${person.sex}.webp` : '../assets/None.webp')}/>*/}

            {
                person?.sex === 'Male' ?
                    <Image style={styles.logo}
                           source={require('../assets/Male.webp')}/> :
                    person?.sex === 'Female' ?
                        <Image style={styles.logo}
                               source={require('../assets/Female.webp')}/> :
                        <Image style={styles.logo}
                               source={require('../assets/None.webp')}/>
            }

            <Text style={styles.heading}>
                {person?.name || "Loading..."}
            </Text>

            <DataTable style={{borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0, borderColor: "#FC5C7D"}}>
                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1.5}}><Text
                        style={styles.paragraph}>Email:</Text></DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>{person?.email || "Loading..."}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1.5}}><Text
                        style={styles.paragraph}>Number:</Text></DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>{person?.number || "Loading..."}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1.5}}><Text
                        style={styles.paragraph}>Sex:</Text></DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>{person?.sex || "Loading..."}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1.5}}><Text style={styles.paragraph}>Address</Text></DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>{person?.address || "Loading..."}</DataTable.Cell>
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
