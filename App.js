import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
    const [enteredItem, setEnteredItem] = useState('');
    const [items, setItems] = useState([]);

    const itemInputHandler = (enteredText) => {
        setEnteredItem(enteredText);
    };

    const addItemHandler = () => {
        setItems(currentItems => [...currentItems, {key: Math.random().toString(), value: enteredItem}]);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Nome do item" style={styles.textInput} onChangeText={itemInputHandler} value={enteredItem}/>
                <View><Button style={styles.addButton} title="+" onPress={addItemHandler}/></View>
            </View>
            <FlatList
            data={items}
            renderItem={itemData => (
              <View style={styles.listItem}>
                <Text>{itemData.item.value}</Text>
              </View>
            )}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    },
    addButton: {
        width: 50,
        height: 50,
        // backgroundColor: 'white',
        // borderRadius: 50,
        // borderColor: 'black',
        borderWidth: 1
    }
});
