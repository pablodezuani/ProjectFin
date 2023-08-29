import { NavigationContainer } from "@react-navigation/native";
import Home from "./modules/Home";
import Login from "./modules/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuUrl } from "./shared/enums/MenuUrl.enum";
const Stack = createNativeStackNavigator();
const Navigation = ()=> {
return(
<NavigationContainer>r
    <Stack.Navigator>
      <Stack.Screen name={MenuUrl.Login} component={Login} options={{headerShown: false}}/>
      <Stack.Screen name={MenuUrl.HOME} component={Home}   options={{title: 'Home'}}/>
    </Stack.Navigator>
  </NavigationContainer>
);
};
export default Navigation;