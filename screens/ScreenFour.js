import React, { Component } from 'react';
import { View, TouchableNativeFeedback,StyleSheet } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import moment from 'moment';
import ScreenName from '../components/ScreenName.js'
import Header from '../components/Header';
import News from '../components/News';



/*const defaultJSONData = {
  source: {
    id: 'fox-news',
    name: 'Fox News'
  },
  author: null,
  title:
    "Jeff Bezos' investigator believes 'government entity' may have obtained texts: WashPo reporter - Fox News",
  description:
    'A security consultant for Amazon founder and Washington Post owner Jeff Bezos believes the CEO’s lurid intimate photos may have been acquired by a "government entity," a reporter at the paper said Thursday.',
  url:
    'https://www.foxnews.com/tech/jeff-bezos-investigator-believes-government-entity-obtained-texts-wapo-reporter',
  urlToImage:
    'https://media2.foxnews.com/BrightCove/694940094001/2019/02/08/694940094001_5999770984001_5999767526001-vs.jpg',
  publishedAt: '2019-02-08T07:52:57Z',
  content:
    'A security consultant for Amazon founder and Washington Post owner Jeff Bezos believes the CEO’s lurid intimate photos may have been acquired by a "government entity," a reporter at the paper said Thursday. Manuel Roig-Franzia, the reporter, told MSNBC that w… A security consultant for Amazon founder and Washington Post owner Jeff Bezos believes the CEO’s lurid intimate photos may have been acquired by a "government entity," a reporter at the paper said Thursday. Manuel Roig-Franzia, the reporter, told MSNBC that w… A security consultant for Amazon founder and Washington Post owner Jeff Bezos believes the CEO’s lurid intimate photos may have been acquired by a "government entity," a reporter at the paper said Thursday. Manuel Roig-Franzia, the reporter, told MSNBC that w… A security consultant for Amazon founder and Washington Post owner Jeff Bezos believes the CEO’s lurid intimate photos may have been acquired by a "government entity," a reporter at the paper said Thursday. Manuel Roig-Franzia, the reporter, told MSNBC that w… '
};

*/


export default class ScreenFour extends React.Component {
  


  // we won't need to configure navigationOptions just yet
  static navigationOptions = {

  };

  render() {

    const url = 'http://newsapi.org/v2/everything?q=machineLearning&language=en&sortBy=publishedAt&apiKey=your_api_key_here';
    

    return (
      <React.Fragment>
      <Header/>
          <News data={url} />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
});