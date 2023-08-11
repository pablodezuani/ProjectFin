import { SafeAreaView, View } from 'react-native';
import Login from './src/modules/login';
import store from '././src/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaView> 
  <Login />

</SafeAreaView>
</Provider>
  );
  
};
export default App;
