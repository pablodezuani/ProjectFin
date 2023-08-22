import { SafeAreaView, View } from 'react-native';
import Login from './src/modules/login';
import store from '././src/store'
import { Provider } from 'react-redux'
import GlobalModal from './src/shared/components/modal/GlobalModal/GlobalModal';

const App = () => {
  return (
    <Provider store={store}>
    <GlobalModal/>
    
    <SafeAreaView> 
  <Login />

</SafeAreaView>
</Provider>
  );
  
};
export default App;
