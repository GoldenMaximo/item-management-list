import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const ItemInput = props => {
  const [enteredItem, setEnteredItem] = useState('');

  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText);
  };

  addItemHandler = () => {
    props.onAddItem(enteredItem);
    setEnteredItem('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput placeholder="Item name" style={styles.textInput} onChangeText={itemInputHandler} value={enteredItem} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addItemHandler} />
          </View>
        </View>  
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: '45%'
  },
});

export default ItemInput;