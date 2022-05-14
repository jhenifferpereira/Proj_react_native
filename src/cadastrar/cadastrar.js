import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import firebase from '../firebaseConnection'
import { TextInput } from 'react-native-paper';




export default function App() {
    
    const [produto, setProduto] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    

    



    async function cadastrar() {
        if (produto !== '' & preco !== '' & categoria !== '') {
            let produtos = await firebase.database().ref('produtos');
            let chave = produtos.push().key;

            produtos.child(chave).set({
                produto: produto,
                preco: preco,
                categoria: categoria
            });

            alert('Produto Cadastrado!');
            setProduto('');
            setPreco('');
            setCategoria('');
           
        }
        else {
            if (produto == '') {
                alert('Nome do Produto deve ser preeenchido!');
            }
        
        else if (preco == '') {
                alert('Proço do Produto deve ser preeenchido!');
            }

        else {
                alert('Categoria do Produto deve ser preeenchido!');
            }
        }


    }
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Produto</Text>
            <TextInput
                placeholder='Nome Produto'
                maxLength={40}
                left={<TextInput.Icon name="microwave" />}
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setProduto(texto)}
                value={produto}
            />

           

            <Text style={styles.texto}>Proço R$</Text>
            <TextInput
                placeholder='0,00'
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setPreco(texto)}
                value={preco}
            />

            <Text style={styles.categoria}>Categoria</Text>
            <TextInput
                placeholder='Categoria'
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setCategoria(texto)}
                value={categoria}
            />
        <TouchableOpacity onPress={cadastrar}
                style={styles.button}
                activeOpacity={0.5}>
                
                <View style={styles.buttonIconSeparatorStyle} />
                <Text style={styles.buttonTextStyle}>
                    Enviar
                </Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },

    texto: {
        fontSize: 15,
    },

    input: {
        marginBottom: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: '#121212',
        height: 30,
        fontSize: 15,
        borderRadius: 10
    },

    icon: {
        position: 'absolute',
        right: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 100,
        fontSize: 20
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    }
});