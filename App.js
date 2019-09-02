import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import ItemInput from './components/ItemInput';

export default function App() {
    const [items, setItems] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addItemHandler = item => {
      if (!item.length) {
        return;
      }
      setItems(currentItems => [...currentItems, {keystone: Math.random().toString(), value: item}]);
      setIsAddMode(false);
    };

    const removeItemHandler = itemKeystone => {
      setItems(currentItems => {
        return currentItems.filter((item) => item.keystone !== itemKeystone);
      });
    };

    return (
        <View style={styles.screen}>
          <Button title="Add new item" onPress={() => setIsAddMode(true)}/>
          <ItemInput visible={isAddMode} onAddItem={addItemHandler} onCancel={() => setIsAddMode(false)}/>
          <FlatList
          keyExtractor={(item) => item.keystone}
          data={items}
          renderItem={itemData => (
            <ListItem keystone={itemData.item.keystone} onDelete={removeItemHandler} title={itemData.item.value}/>
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
});
