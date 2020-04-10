import React, { useState } from 'react';
import {
    View,
    TouchableOpacity, SafeAreaView
} from 'react-native';

import { Card, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles'

export default function Form({ navigation }) {

    const [eye, setEye] = useState(true)


    function changeVisualize() {
        setEye(!eye);
    }

    return (
        <SafeAreaView style={styles.main} >
            <Card containerStyle={styles.card} title="Enter your credentials" titleStyle={styles.title}>
                <Input
                    containerStyle={styles.input}
                    placeholder='User Name'
                    inputStyle={{ color: '#FAF9F9' }}
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='user'
                            size={24}
                            color='#618CB5'
                        />
                    }
                />
                <Input
                    containerStyle={styles.input}
                    placeholder='Password'
                    inputStyle={{ color: '#FAF9F9' }}
                    secureTextEntry={eye}
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='lock'
                            size={24}
                            color='#618CB5'
                        />
                    }

                    rightIcon={
                        <TouchableOpacity onPress={changeVisualize}>
                            <Icon
                                style={styles.icon}
                                name={eye ? 'eye-off' : 'eye'}
                                size={24}
                                color='#618CB5'
                            />
                        </TouchableOpacity>
                    }
                />
                <View style={styles.buttons}>
                    <Button title="login" type="outline"
                        containerStyle={styles.login}
                        onPress={() => {
                            navigation.navigate('Intro')
                        }}
                    />
                    <Button title="Sign in" type="clear"
                        icon={
                            <Icon
                                name="question"
                                size={15}
                                color="white"
                                style={{
                                    marginLeft: 9
                                }}
                            />
                        }

                        iconRight={true}

                        containerStyle={styles.sigin} />
                </View>
            </Card>
        </SafeAreaView>
    );
}