import React from "react";
import AdressForm from './components/AdressForm'
import ShowAddress from './components/ShowAddress'
import {useAdress} from './hooks'
function App() {
  const {route} = useAdress()
  return (
    <div className="App">
      {route === 'newAddress' && <AdressForm />}
      {route === 'showAddress' && <ShowAddress />}
    </div>
  );
}

export default App;
