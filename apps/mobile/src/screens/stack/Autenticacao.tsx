import { View, Text, StyleSheet, Pressable } from 'react-native'

export function Autenticacao({ navigation }: any) {
    return <View style={ styles.container }>
        <Text style={ styles.texto }>Entrar</Text>
    </View>

    /* return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Pressable onPress={() => navigation?.replace('Abas')}>
            <Text>Entrar</Text>
        </Pressable>
    </View> */
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imagemDeFundo: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    formulario: {
        padding: 20,
    },
    logo: {
        marginVertical: 20,
    },
    conteudo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    descricao: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
        marginHorizontal: 20,
    },
    button: {
        width: '40%',
        height: 40,
        backgroundColor: '#22c55e',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    texto: {
        fontSize: 30
    }
})