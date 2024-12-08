import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
//import { View, Text} from 'react-native'
import { Autenticacao } from './Autenticacao'

const Stack = createNativeStackNavigator()

export function App() {
    return <NavigationContainer>

                <Stack.Navigator>

                    <Stack.Screen 
                        name='Autenticacao' 
                        component={Autenticacao} 
                        options={{headerShown: false}}                        
                    />
                    
                    {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Stack</Text>
                    </View> */}
                    
                </Stack.Navigator>               

    </NavigationContainer>
}