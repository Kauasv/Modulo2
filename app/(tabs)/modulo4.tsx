// Importa o hook useState para gerenciar estado no componente.
// O que é estado? É, por exemplo, se algo está aberto ou fechado, visível ou oculto, etc.
import { useState } from 'react';
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput
} from 'react-native';

// Importa componentes de UI do React Native.
// UI significa "interface do usuário".

export default function Modulo4() {
    //controla o valor digitado no campo "nome"
    const [nome, setNome] = useState('');
    
    //controla o valor digitado no campo email
    const [email, setEmail] = useState('');
    
    //controla o texto da mensagem  
    const [mensagem, setMensagem] = useState('');
    
    //indica se a simulação de envio está em andamento
    const [enviando, setEnviando] = useState(false);
    
    //indica se a mensagem já foi enviada (caso a simulação tenha sido feita)
    const [enviado, setEnviado] = useState(false);

    //função chamada ao tocar em enviar a mensagem 
    const handleEnviar = () => {
        //validação garante que todos os campos foram preenchidos 
        if (!nome || !email || !mensagem) {
            alert('Preencha todos os campos');
            return;
        }

        setEnviando(true); //mostra o spinner 
        setEnviado(false); //esconde a mensagem de sucesso 
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Fale conosco</Text>

            <TextInput
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
                //limpa o campo nome 
            />

            <TextInput
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'// abre o teclado otimizado para email 
                style={styles.input}
            />

            <TextInput
                placeholder="Digite sua mensagem"
                value={mensagem}
                onChangeText={setMensagem}
                style={[styles.input, { height: 100 }]}
                multiline // permite varias linhas de texto 
                
            />

            <Pressable onPress={handleEnviar} style={styles.button}>
                <Text style={styles.buttonText}>Enviar mensagem</Text>
            </Pressable>

            {/*mostra o spiner enquanto enviando === true*/}
            {enviando && (
                <ActivityIndicator size="large" color="#0A5CA8"  style={{ marginVertical: 10 }} 
                />
            )}
            {/*mostra o texto de sucessso quando o enviado foir igual a === true */}

            {enviado && (
                <Text style={styles.success} >mensagem ienviada com sucesso ! </Text>

            )}

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Home</Text>
            </Pressable>
        </ScrollView>
    );
}

// Estilos da interface
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#e9ecef',
        borderRadius: 6,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#0a5ca8',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },

    success: {
        marginBottomton: 10,
        fontWeight: 'bold',

    
    },
    input : {

        borderWidth: 2 ,
        borderColor : '#ccc222',
        padding : 10 ,
        borderRadius : 6,
        marginBottom: 10 ,
        width: 500 , 

    } 
});
