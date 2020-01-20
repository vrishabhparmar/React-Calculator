import React from 'react';
// import Main from './components/MainComponent'
import './App.css';
import {Provider} from 'react-redux'
import ConfigureStore from './redux/Configurestore'
import Container from './components/ContainerComponent';



function App() {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
     
        <div className="App">
          
         <Container/>
      </div>
     
      

    </Provider>
    
  );
}

export default App;
