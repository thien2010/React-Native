import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
  const [data, setdata] = useState();
  const [name, setname] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();

  function a() {

    const data = {
      name: name,
      email: email,
      gender: gender,
      status: status
    }
    fetch('https://gorest.co.in/public-api/users', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 5812c0a20380e83e41a13f5a7d7bfc13339d2841d39708aa2092c7dde41854f1'
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.code == 422) {
          alert('Email Đã Tồn Tại')
          // alert(data.name)
          // setdata('False')
        } else if (data.code == 201) {
          alert('Email Đăng Ký Thành Công')
          // setdata("Secssec")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30
       }}> SignUp </Text>
      <TextInput style={styles.inputBox}
        onChangeText={(name) => setname(name)}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Name"
        placeholderTextColor='gray'

      />

      <TextInput style={styles.inputBox}
        onChangeText={(email) => setEmail(email)}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Email"
        keyboardType="email-address"
      />

      <TextInput style={styles.inputBox}
        onChangeText={(gender) => setGender(gender)}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Gender"
      />

      <TextInput style={styles.inputBox}
        onChangeText={(status) => setStatus(status)}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Status"
      />
      <Button
        title="Send"
        onPress={() => {
          a();
          console.log({name});
          console.log({email});
          console.log({status});
          console.log({gender});

        }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10
  },
});
