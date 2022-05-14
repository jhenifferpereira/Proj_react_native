import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

 

export default function Listagem({ data, deleteItem }) {

    const [produtos, setProduto] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        //listar dados ao cadastrar
        async function dados() {

 

            await firebase.database().ref('produtos').on('value', (snapshot) => {
              setProdutos([]);
      
       
      
              snapshot.forEach((chilItem) => {
                let data = {
                  key: chilItem.key,
                  produto: chilItem.val().produto,
                  preco: chilItem.val().preco,
                  categoria: chilItem.val().categoria,
                };
      
       
      
                setProdutos(oldArray => [...oldArray, data].reverse());
              })
              setLoading(false);
            })
          }
          dados();

    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Produto: {data.produto}</Text>
      <Text style={styles.text}>Preço(R$): {data.preco}</Text>
      <Text style={styles.text}>Categoria: {data.categoria}</Text>
     
      <View style={styles.item}>
        <TouchableOpacity onPress={() => deleteItem(data.key)}>
          <Icon name="trash" color="#A52A2A" size={20}>Excluir</Icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="create" color="blue" size={20}>Editar</Icon>
        </TouchableOpacity>
      </View>
    </View>
  )
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#FAFAD2',
  },
  text: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Arial'
  },
  item: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-around'
  }
});