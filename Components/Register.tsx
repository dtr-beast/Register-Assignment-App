import React, {useState} from 'react';
import {Picker, StyleSheet, Text, TextInput, View} from 'react-native';

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
        <View style={{backgroundColor: "rgba(26, 238, 2, 0.3)", flex: 1}}>

            <DataTable style={{flex: 1}}>
                <Field text="Name" value={name} onChangeText={(value) => setName(value)}/>
                <Field text="Address" value={address} onChangeText={(value) => setAddress(value)}/>

                <DataTable.Row style={{flex: 1}}>
                    <DataTable.Cell><Text
                        style={{fontWeight: "bold", fontSize: 18}}>Sex</Text></DataTable.Cell>
                    <Picker
                        selectedValue={sex}
                        style={{flex: 2, fontSize: 10, borderRadius: 5, borderColor: '#000', borderStyle: "solid"}}
                        onValueChange={(itemValue, itemIndex) => setSex(itemValue)}
                    >
                        <Picker.Item label="Rather not say" value="None"/>
                        <Picker.Item label="Male" value="Male"/>
                        <Picker.Item label="Female" value="Female"/>
                    </Picker>
                </DataTable.Row>

                <DataTable.Row style={{flex: 1, margin: 20, marginRight: 0}}>
                    <DataTable.Cell><Text
                        style={{fontWeight: "bold", fontSize: 18}}>Number</Text></DataTable.Cell>

                    <TextInput style={{
                        flex: 2,
                        marginBottom: 10,
                        paddingLeft: 3,
                        backgroundColor: "#ffffff",
                        borderRadius: 5,
                        color: "#000"
                    }} value={number} onChangeText={(value) => setNumber(value)} keyboardType="number-pad"/>
                </DataTable.Row>
                {/*<Field text="Number" value={number} onChangeText={(value) => setNumber(value)}/>*/}
                <Field text="E-Mail" value={email} onChangeText={(value) => setEmail(value)}/>

            </DataTable>
            <Button icon="check" mode="contained"
                    style={{padding: "3%", marginLeft: '10%', marginRight: '10%', margin: "3%"}}
                    onPress={submit}>Submit</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    paragraph: {
        marginBottom: 24,
        margin: 2,
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
