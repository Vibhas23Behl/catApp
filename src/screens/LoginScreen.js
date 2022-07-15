import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {useDispatch} from "react-redux";
import {login} from "../actions/auth";

export default function App({ navigation }) {
  const [email, setEmail] = useState("v@catapp.com");
  const [password, setPassword] = useState("123456");
  const dispatch = useDispatch();

  const handleButtonSubmit = () => {
    try {
      dispatch(login())
      navigation.navigate('HomeStack')
    } catch (error) {
      console.log(error, "this is error");
    }
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          value={email}
          placeholderTextColor="#f0f8ff"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={password}
          placeholderTextColor="#f0f8ff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => handleButtonSubmit()} >
        <Text style={styles.loginText}>{'LOGIN'}</Text>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#191970",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: '#fff'
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#9acd32",
  },
});
