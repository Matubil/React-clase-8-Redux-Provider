import logo from './logo.svg';
import './App.css';
import CabeceraConReudx from "./view/containers/CabeceraConRedux"
import { Provider } from 'react-redux';
import globalState from './store/AppGlobalState';
import ListaConRedux from "./view/containers/ListaConRedux"


function App() {
  return (
    <Provider store={globalState}>
      <CabeceraConReudx/>
      <main className='container'>
        <div className='w-50 mx-auto'>
          <ListaConRedux/>
        </div>
      </main>
    </Provider>
  );
}


export default App;
