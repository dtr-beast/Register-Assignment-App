import {DataTable, TextInput} from "react-native-paper";
import {StyleSheet, Text} from "react-native";
import React from "react";

interface Props {
    text: string,
    onChangeText: (text: string) => void,
    value: string
}

export default function Field({text, onChangeText, value}: Props) {
    return (
        <DataTable.Row style={{flex: 1, margin:20, marginRight: 0}}>
            <DataTable.Cell><Text
                style={{fontWeight: "bold", fontSize: 18}}>{text}</Text></DataTable.Cell>

            <TextInput style={{flex: 2, marginBottom: 10}} value={value} onChangeText={onChangeText} />
        </DataTable.Row>
    )
}

const styles = StyleSheet.create({
    paragraph: {
        // marginBottom: 24,
        // margin: 30,
        // fontSize: 25,
        // fontWeight: 'bold',
        // textAlign: 'center',
        // flex: 1
    },
    row: {
        margin: 5,
        padding: 5,
    }
})
