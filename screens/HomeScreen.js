import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ListView,
  View,
  Button,
  Alert,
  StatusBar,
  ImageBackground
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Alex birhday', 'Max birthday']),
    };
  }
  static navigationOptions = {
    title: "Events List",
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff',}}>

        <ListView
          style={{flex: 3}}
          dataSource={this.state.dataSource}
          renderRow={
            (rowData) => 
            <View>
            
            <ImageBackground source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} 
                             style={{width: '100%', height: '100%'}}>
          
            <View style={{flex: 1, flexDirection: 'row', height: 150}}>
              <View style={{width: 380, height: 60, backgroundColor:'rgba(255, 255, 255, 0.7)', alignItems: 'center', position: 'absolute', bottom:0}}>
                <Text style={{marginTop: 8,color: 'black'}}>{rowData}</Text>
                <Text style={{marginTop: 8, color: 'black'}}>{new Date() + ""}</Text>
              </View>
            </View>

            </ImageBackground>
            </View>
          }
        />

        <View style={{ 
          flex: 0.15,
          alignItems: 'center', 
          height: 90, 
          backgroundColor: 'blue',
          }}>
          <Button
            onPress={() => this._navigateToNewEvent()}
            title="NEW EVENT"
            color="white"
            accessibilityLabel="Create new event"
          />
        </View>
        <View style={styles.tabBarInfoContainer}>
      
        </View>
      </View>
    );
  }

  // _openEventCreationScreen() {
  //   Alert.alert(
  //     'New event creation',
  //     'Do you really want to create new event?',
  //     [
  //       {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
  //       { text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //       },
  //       {text: 'OK', onPress: () => navigation.navigate('NewEvent')}
  //     ],
  //     {cancelable: false},
  //   );
  // }

  _navigateToNewEvent() {
    const {navigate} = this.props.navigation;
    navigate('NewEvent');
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    backgroundColor: 'blue',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
