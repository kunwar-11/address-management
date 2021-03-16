import React from "react";
import AdressForm from './components/AdressForm'
import ShowAddress from './components/ShowAddress'

function App() {
  return (
    <div className="App">
      <h1>Your Addresses</h1>
      <AdressForm />
      <ShowAddress />
    </div>
  );
}

export default App;
