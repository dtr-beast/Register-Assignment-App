import React, {useState} from 'react';
import {Picker, StyleSheet, Text, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, DataTable} from 'react-native-paper';
import Field from './Field'


interface Props {
    // TODO: Add type
    navigation: any
}

export default function Register({navigation}: Props) {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [sex, setSex] = useState("Rather not say");

    async function submit() {
        const Person = {
            name,
            address,
            sex,
            number,
            email
        }

        setName('')
        setAddress('')
        setSex('')
        setNumber('')
        setEmail('')
        setSex("Rather not say")


        try {
            const jsonValue = JSON.stringify(Person)
            await AsyncStorage.setItem('@Person', jsonValue)
        } catch (e) {
            console.error(e)
        }
        navigation.navigate('Profile')
    }

    return (
        <View>
            <Text>Register</Text>

            <DataTable style={{borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0, borderColor: "#FC5C7D"}}>
                <Field text="Name" value={name} onChangeText={(value) => setName(value)}/>
                <Field text="Address" value={address} onChangeText={(value) => setAddress(value)}/>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1}}><Text style={styles.paragraph}>Sex</Text></DataTable.Cell>
                    <Picker
                        selectedValue={sex}
                        style={{height: 50, width: 180}}
                        onValueChange={(itemValue, itemIndex) => setSex(itemValue)}>
                        <Picker.Item label="Rather not say" value={"None"}/>
                        <Picker.Item label="Male" value="M"/>
                        <Picker.Item label="Female" value="F"/>
                    </Picker>
                </DataTable.Row>

                <Field text="Number" value={number} onChangeText={(value) => setNumber(value)}/>
                <Field text="E-Mail" value={email} onChangeText={(value) => setEmail(value)}/>

            </DataTable>
            <Button onPress={submit}>Submit</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    paragraph: {
        marginBottom: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        margin: 5,
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
