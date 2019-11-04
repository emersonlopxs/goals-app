import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function First() {
  const [text, setText] = useState(
    'Open up App.js to start working on your app!'
  );
  return (
    <View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
