
import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import Main from './Main';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      noteArray : [],
      text: '',
    }
  }


  addNote(){
    if(this.state.text){
     this.state.noteArray.push({
       'note':this.state.text,
     });
     this.setState({noteArray: this.state.noteArray});
     this.setState({text:''});
    }
 }

  render() {
    let  notes = this.state.noteArray.map((val, key)=> {
      return<Main key={key} keyval={key} val={val} />
    });

    return (
      <View style={styles.container}>
        <View style={styles.footer}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text)=> this.setState({text})}
            value={this.state.text}
            placeholder='plz enter somthimg..!'
          ></TextInput>
          <TouchableOpacity style={styles.button}
            onPress={this.addNote.bind(this)}
          >
            <Text style={styles.footer} > ADD </Text>
          </TouchableOpacity>
        </View>
          <ScrollView style={styles.scrollContainer} >
              {notes}
          </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 inputStyle: {
    fontSize: 20,
    textAlign:'center',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor:'white',
    margin: 10,
    backgroundColor:'#ccc',
    padding: 5,
    paddingLeft: 40,
    paddingRight: 35,
  },
  button:{
    borderColor: '#007aff',
    borderRadius: 10,
    borderWidth: 0,
    width:70,
    backgroundColor:'#CCC',
    borderBottomWidth: 10,
    marginTop:10
  },
  textStyle:{
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 6,
    paddingBottom: 6
  },
  scrollContainer:{
    flex:1,
    marginBottom: 100,
  },
  footer:{
    flexDirection:'row',
    position:'absolute',
    fontSize: 16,
    textAlign:'center',
    bottom: 0,
    left: 0,
    right:0,
    zIndex: 10,
  },
});
