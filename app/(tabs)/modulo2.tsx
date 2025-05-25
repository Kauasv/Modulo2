/*Import = importa diversos componentes do react natives 
Safeareviwer: evita que o conteudo fique embaixo de barras do sistema(notch do ifone ) 
ScrollAreaviwer : 
text :  
Pressable : botão da tela que responde ao toque 
ActivityIndicaitor : componente de carregamento (loading spinner)
Modal = janela flutuante (pop up )
View : container generico 
StyleSheet: -> define os estilos do css em js no java script css-in-js
useState : importação do hook e useState para controlar estados locais(como abrir/fechar modal)
*/
import React, { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}> {/* corrigido: Style => style, conteier => container */}
      <ScrollView contentContainerStyle={styles.content}> {/* corrigido: contentigConteinerStyle => contentContainerStyle, style => styles */}
        <Text style={styles.title}>Bem vindo</Text>

        <Pressable onPress={() => setModalVisible(true)} style = {styles.button}>
          <Text styles = {styles.buttonText}>Abrir modal </Text>
        </Pressable>

        <Modal visible={modalVisible} transparent={true}>
          <View>
            <View>
              <Text>Conteúdo do Modal</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <ActivityIndicator />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* ocupa toda a tela */
  container: {
    flex: 1,
  },
  content: {
    padding: 15,
  },
  /* com fonte maior e espaçamento */
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  /* botão / margem inferior para separação */
  button: {
    backgroundColor: "#007AFF",
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  // cor vermelha para o texto
  buttonText: {
    color: "black",
    textAlign: "center",
  },
  // fundo escuro semi-transparente para o modal (modal overlay)
  ModalOverlay: {
    flex: 1,
    alignItems: "center", // corrigido: alignItens => alignItems
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    margin: 30,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
  modalButton: {
    // você pode continuar estilizando aqui
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
