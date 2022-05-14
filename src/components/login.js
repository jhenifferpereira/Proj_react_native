import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, TouchableOpacity } from "react-native";
import firebase from "../firebaseConnection";


export default function Login({ changeStatus }) {
    const [type, setType] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        if (type === 'login') {
            // Aqui fazemos o login
            const user = firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    changeStatus(user.user.uid)
                })
                .catch((err) => {
                    console.log(err);
                    alert('Login e/ou senha Inválidos ou não cadastrados');
                    return;
                })
        } else {
            // Aqui cadastramos o usuario 
            const user = firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    changeStatus(user.user.uid)
                })
                .catch((err) => {
                    console.log(err);
                    alert('Erro ao cadastrar! Verifique dados informados');
                    return;
                })
        }
    }
    return (
        <SafeAreaView>
            <View style={styles.tituloView}>
                <Text style={styles.tituloText}>Login</Text>
            </View>
            <View style={styles.input}>
                <Text>Login:</Text>
                <TextInput
                    style={styles.textInputStyle}
                    textContentType="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Login"
                />
                <Text>Senha:</Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="**************"
                    textContentType="password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    text
                />
            </View>
            <TouchableOpacity
                    style={[styles.handleLogin,
                    { backgroundColor: type === 'login' ? '#3ea6f2' : '#141414' }]}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginText}>
                        {type === 'login' ? 'Acessar' : 'Cadastrar'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setType(type => type === 'login' ? 'cadastrar' : 'login')} >
                    <Text style={{ textAlign: 'center' }}>
                        {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
                    </Text>
                </TouchableOpacity>
                
        </SafeAreaView>
          
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop: 70,
      backgroundColor: '#F2f6fc',
      paddingHorizontal: 10,
    },
    input:{
      marginBottom: 50,
      marginLeft: 50,
      backgroundColor: '#FFF',
      borderRadius: 4,
      height: 45,
      padding: 50,
      borderWidth: 1,
      borderColor: '#141414'
    },
    
    handleLogin:{
      alignItems: 'center',
      justifyContent:'center',
      height: 45,
      marginBottom: 50,
    },
    loginText:{
      color: '#FFF',
      fontSize: 17,
    }
  })

