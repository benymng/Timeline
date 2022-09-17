import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {DataTable, Provider as PaperProvider} from 'react-native-paper';
import {Button, Card, Title, Paragraph} from 'react-native-paper';
import {Searchbar} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {Appbar} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LibraryScreen = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getList = async () => {
    const jsonList = await AsyncStorage.getItem('list');
    const list = JSON.parse(jsonList);
    alert(list);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {/* <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Timeline" />
            <Appbar.Action icon="calendar" onPress={() => {}} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
          </Appbar.Header> */}
          <TextInput
            value={text}
            placeholder="Search"
            onChangeText={text => setText(text)}
          />
          <Card>
            <Card.Content>
              <Title>Card Title</Title>
              <Paragraph>Tesitng</Paragraph>
            </Card.Content>
          </Card>

          <Button
            onPress={() => {
              getList();
            }}>
            Testing
          </Button>
          <Button onPress={() => AsyncStorage.setItem('list', '')}>
            Clear
          </Button>
          {/* <DataTable>
            <DataTable.Header>
              <DataTable.Title>Link</DataTable.Title>
              <DataTable.Title>Description</DataTable.Title>
              <DataTable.Title>Tag</DataTable.Title>
            </DataTable.Header>
          </DataTable> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
