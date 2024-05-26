import React from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';

const Contacts = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Contacts Screen</Text>
      <WebView
        source={{ uri: 'https://www.facebook.com/p/Myries-Suplidora-de-Barberia-100064126293389/' }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

export default Contacts;
