import { Provider } from 'react-redux'
import { store } from '../stateApi/store';
import './App.css';
import List from './composants/List';
import Form from './composants/Form';
 

function App() {
 return (
    <Provider store={store}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-6">
              <Form />
              <List />
            </div>
          </div>
          </div>
       
    </Provider>
 );
}

export default App;