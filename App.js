import React, {useState} from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const App = () => {
    const [userType, setUserType] = useState('Admin');
    const [userName, setUserName] = useState('');
    const [pw, setPwd] = useState('');
  return (
      <View>
          <Text></Text>

          <Text>User Type:</Text>
          <Picker
              selectedValue={userType}
              onValueChange={(value) => setUserType(value)}
          >
              <Picker.Item label="Admin" value="Admin" />
              <Picker.Item label="Guest" value="Guest" />
          </Picker>

          <Text>User Name:</Text>
          <TextInput
              style={{ borderWidth: 1 }}
              value={userName}
              onChangeText={(text) => setUserName(text)}
          />

          <Text>Password:</Text>
          <TextInput
              style={{ borderWidth: 1 }}
              value={pw}
              onChangeText={(text) => setPwd(text)}
              secureTextEntry={true}
          />

          <TouchableOpacity onPress={() =>
              ToastAndroid.show(`Welcome ` + userType + ' ' + userName, ToastAndroid.SHORT)}>
              <Text>LOG IN</Text>
          </TouchableOpacity>

      </View>
  );
};

export default App;