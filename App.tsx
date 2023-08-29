import store from '././src/store'
import { Provider } from 'react-redux'
import GlobalModal from './src/shared/components/modal/GlobalModal/GlobalModal';
import Navigation from './src/Navigation';

const App = () => {
  return (
    <Provider store={store}>
    <GlobalModal/>
   <Navigation/>
</Provider>
  );  
};
export default App;
