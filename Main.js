
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Main extends Component {
  render() {
    return (
        <View key={ this.props.keyval } style={styles.note}>            
            <Text style={styles.noteText}> {this.props.val.note} </Text>
        </View>
    );  
  }
}

const styles = StyleSheet.create({
  note:{
      padding: 20,
      borderBottomColor: '#E91E63', 
  },
  noteText:{
      
      borderLeftColor: '#ccc',
  },
});
