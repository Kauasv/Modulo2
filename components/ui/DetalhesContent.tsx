
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'; /

const dados = [
  { id: '1', descricao: 'transferência recebida 120R' },
  { id: '2', descricao: 'transferência recebida 160R' },
  { id: '3', descricao: 'transferência recebida 200R' },
  { id: '4', descricao: 'transferência recebida 500R' }, 
];

// Componente funcional que exibe os detalhes (título e lista de dados)
export default function DetalhesContent() { 
  return (
    // Container principal do conteúdo
      
    <View style={styles.container}> {/**/ }
      {/* Título da seção */}
      <Text style={styles.title}>Detalhe do módulo 2</Text> {}
      
      {/* Renderiza os dados definidos acima */}
      <FlatList
        data={dados} // Fonte de dados
        keyExtractor={(item) => item.id} //define a chave unica para cada item 
        renderItem={({ item }) => (
            //o Item esta em java script 
            //o => mais ( é para poder puxar uma função anonima 
            //cada item da lista é renderizado com uma view renderizada 
            <View style = {styles.item}> 
            <Text> {item.descricao}</Text> 
            </View>
        )
        }
        />
        </View>
              );
              const styles = StyleSheet.create({
                // Estilo do container principal
                container: {
                  paddingBottom: 10, // Corrigido: 'pading botom' → 'paddingBottom'
                },
                //estilo do titulo 
                title : {
                    fontWeight: 'bold',
                    fontSize: 18, // Corrigido: número não deve estar entre aspas
                    marginBottom: 10, // Corrigido: 'marginbutom' → 'marginBottom'
                    alignSelf: 'center', // Corrigido: 'alinigself' e valor → 'alignSelf: center'
                },
                //estilo de cada item da lista 
                item :{
                    backgroundColor: 'grey',
                    padding: 10, // espaçamento interno - Corrigido: valor ausente
                    marginVertical: 5, // espaço vertical entre itens - Adicionado conforme comentário
                    borderRadius: 6, // Corrigido: 'bordeRadios' → 'borderRadius
                                }
                

                },
              });