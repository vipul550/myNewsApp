import React from "react";
import { StyleSheet, Text, View,TouchableNativeFeedback, ShadowPropTypesIOS } from "react-native";
import {Card, Divider} from 'react-native-elements';
import ReadMore from 'react-native-read-more-text';

const NewsCard = (props) => (
    

  <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}
        style={styles.container}
      >
        <Card
          featuredTitle= {props.title}
          featuredTitleStyle={styles.featuredTitleStyle}
                  >
          <Text>
                {props.title}
          </Text>
          <Divider/>
          <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={_renderTruncatedFooter}
              renderRevealedFooter={_renderRevealedFooter}
              onReady={_handleTextReady}>
              <Text style={styles.cardText}>
               {props.description}
              </Text>
            </ReadMore>
          <View>
            <Text key={props.source.id} style={styles.noteStyle}>{props.source.name}</Text>
            <Text key={props.publishedAt} style={styles.noteStyle}>{props.publishedAt}}</Text>
          </View>
        </Card>
         
      </TouchableNativeFeedback>
    
);

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
    
  },
  container:{
      alignSelf:"auto"
  }
});

const _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: 'blue', marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  }
 
 const _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: 'blue', marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  }

 const _handleTextReady = () => {
    // ...
  }

export default NewsCard;