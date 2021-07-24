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
        <DataTable.Row style={styles.row}>
            <DataTable.Cell style={{flex: 1}}><Text style={styles.paragraph}>{text}</Text></DataTable.Cell>

            <TextInput style={{flex: 2}} value={value} onChangeText={onChangeText}/>
        </DataTable.Row>
    )
}

const styles = StyleSheet.create({
    paragraph: {
        marginBottom: 24,
        margin: 2,
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    row: {
        margin: 5,
        padding: 5,
    }
})
