import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      backgroundColor: '#fff',
    };
  }

  handleButtonClick = (newMessage, newColor) => {
    this.setState({ message: newMessage, backgroundColor: newColor });
    Alert.alert(newMessage);
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <ButtonComponent
          backgroundColor="green"
          message="Green button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#32CD32" 
          buttonText="GREEN"
        />
        <ButtonComponent
          backgroundColor="blue"
          message="Blue button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#0000CD"
          buttonText="BLUE"
        />
        <ButtonComponent
          backgroundColor="brown"
          message="Brown button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#FF6347"
          buttonText="BROWN"
        />
        <ButtonComponent
          backgroundColor="#FFD700"
          message="Yellow button clicked!"
          onClick={this.handleButtonClick}
          colorChange="yellow"
          buttonText="YELLOW"
        />
        <ButtonComponent
          backgroundColor="#DC143C"
          message="Red button clicked!"
          onClick={this.handleButtonClick}
          colorChange="red"
          buttonText="RED"
        />
        <ButtonComponent
          backgroundColor="black"
          message="Black button clicked!"
          onClick={this.handleButtonClick}
          colorChange="black"
          buttonText="BLACK"
        />
        {this.state.message && <Text style={styles.message}>{this.state.message}</Text>}
      </View>
    );
  }
}

class TitleComponent extends Component {
  render() {
    const { title, color } = this.props;
    return <Text style={[styles.title, { color: color }]}>{title}</Text>;
  }
}

class ButtonComponent extends Component {
  render() {
    const { backgroundColor, message, onClick, colorChange, buttonText } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(message, colorChange)}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default App;
