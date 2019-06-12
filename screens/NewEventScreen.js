import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Icon, StatusBar } from 'react-native';

type Props = {|
  navigation: NavigationScreen,
|};

export default class NewEventScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => ({
    title: 'New Event',
    headerLeft: (
      <Button
        title="Back"
        onPress={() => navigation.goBack()}>
      </Button>
    ),
  });

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff',}}>
      <ScrollView style={styles.container}>
        <Text> New event screen creation</Text>
      </ScrollView>
      </View>
    );
  }

  _navigateBack() {
    const {navigate} = NewEventScreen.this.props.navigation;
    navigate.popToTop();
  }

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
