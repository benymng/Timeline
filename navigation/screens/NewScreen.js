import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native';
import {TextInput, Title} from 'react-native-paper';
import {v4 as uuidv4} from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const NewScreen = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [list, setList] = useState([]);

  const addItem = async (url, title, description) => {
    const newItem = {
      title: title,
      url: url,
      description: description,
    };

    setList([newItem, ...list]);
    jsonItem = JSON.stringify(list);
    await AsyncStorage.setItem('list', jsonItem);
    alert('success');
    setTitle('');
    setUrl('');
    setDescription('');
  };

  // clearList();
  // console.log('success');

  return (
    <View>
      <Title>Testing</Title>
      <TextInput
        value={title}
        placeholder="Title"
        onChangeText={title => {
          setTitle(title);
        }}
      />
      <TextInput
        value={url}
        placeholder="URL"
        onChangeText={url => setUrl(url)}
      />
      <TextInput
        value={description}
        placeholder="Description"
        onChangeText={description => setDescription(description)}
      />
      <Button
        title="submit"
        onPress={e => {
          addItem(url, title, description);
          e.preventDefault();
        }}></Button>
    </View>
  );
};
