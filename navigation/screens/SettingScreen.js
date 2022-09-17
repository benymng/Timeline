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
import {Button} from 'react-native-paper';
import {Searchbar} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {Appbar} from 'react-native-paper';

export const SettingScreen = () => {
  const [text, setText] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
          <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Timeline" />
            <Appbar.Action icon="calendar" onPress={() => {}} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
          </Appbar.Header>
          <TextInput
            value={text}
            placeholder="Search"
            onChangeText={text => setText(text)}
          />
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Link</DataTable.Title>
              <DataTable.Title>Description</DataTable.Title>
              <DataTable.Title>Tag</DataTable.Title>
            </DataTable.Header>
          </DataTable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
