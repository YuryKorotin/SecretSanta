import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class NewEventScreen extends React.Component {
  static navigationOptions = {
    title: 'New Event',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> New event screen creation</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
