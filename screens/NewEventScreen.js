import React from 'react';
import { TextInput, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, Icon, StatusBar } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

type Props = {|
  navigation: NavigationScreen,
|};

export default class NewEventScreen extends React.Component<Props> {
  state = { date: new Date('December 17, 1995 03:24:00') };

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
      <View style={{flex: 1, backgroundColor: '#fff', marginLeft: 16, marginRight: 16}}>
        <ScrollView style={styles.container}>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Event name"
              maxLength={20}
            />
            <DatePicker
            style={{width: 200, marginTop: 16}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}/>
            <TextInput
              style={styles.textInput}
              placeholder="Budget"
              maxLength={20}
            />
            <TouchableOpacity
              style={styles.createButton}
              activeOpacity = { .5 }
              onPress={() => this._createEvent()}>
              <Text style={styles.TextStyle}> CREATE </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  _onChangeNameHandle() {
    
  }

  _createEvent() {
    
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
  createButton: {
    alignSelf: "stretch", 
    marginTop: 16,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 15,
    backgroundColor:'#3D70A6',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3D70A6'
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
