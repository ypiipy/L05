import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const InputBox = ({ label, onChangeText }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                style={{ borderWidth: 1 }}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const MyApp = () => {
    const [type, setType] = useState('Admin');
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');

    return (
        <View>
            <Text></Text>

            <Picker onValueChange={(value) => setType(value)}>
                <Picker.Item label="Admin" value="Admin" />
                <Picker.Item label="Guest" value="Guest" />
            </Picker>

            <InputBox
                label="User Name:"
                onChangeText={(text) => setName(text)}
            />

            <InputBox
                label="Password:"
                onChangeText={(text) => setPw(text)}
            />

            <TouchableOpacity
                onPress={() => {
                    const correctPassword = '123';
                    let mymessage = 'Error! Wrong Password!';

                    if (pw == correctPassword) {
                        mymessage = 'Welcome ' + type + ' ' + name;
                    }

                    ToastAndroid.show(mymessage, ToastAndroid.SHORT);
                }}
            >
                <Text>LOG IN</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyApp;