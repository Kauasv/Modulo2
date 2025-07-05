import { ThemedText } from '@/components/ThemedText';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
export default function HomeScreen() {
return(
  <ScrollView contentContainerStyle={styles.container}>
  <Image source={require('@/assets/images/partial-react-logo.png')}
  style={styles.banner}
  />
  <ThemedText type = 'title' style = {styles.title}> Home </ThemedText>
  <Pressable onPress= {() => router.push('/modulo2')}
    style={styles.buttonText}>
      <Text style={styles.buttonText}> Ir para o modulo2</Text>
    </Pressable>
    
    <Pressable onPress = {()=>router.push('/explore')}
    style={styles.buttonText}>
    </Pressable>
    <Pressable onPress = {()=>router.push('/(tabs)/modulo3')}
    style={styles.buttonText}>
    
      <Text style={styles.buttonText}> Ir para o explorar</Text>
    </Pressable>
    </ScrollView>
);
}
const styles = StyleSheet.create({
  container:{
        flexGrow: 1, //Centraliza o conteúdo em relação a altura
        justifyContent: 'center', //Centraliza verticalmente o conteúdo
        alignItems: 'center', //Centraliza horizontalmente o conteúdo
        padding: 20,
        backgroundColor: '#f9f9f9',
      },
      banner:{
        width: 200, //Largura fixa da imagem
        height: 150, //Altura fixa da imagem
        resizeMode: 'contain',
        marginBottom: 20, //Distancia para baixo relacionado a margem
      },
      buttonText:{
        fontSize: 28,
        fontWeight: 'bold', //Texto em negrito
      },
      title:{fontSize:16,
        
      }
    }
  )