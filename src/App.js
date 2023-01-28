import { React } from 'react';
import ProductItems from './components/ProductItems';
import {GlobalProvider } from './context/GlobalContext';


function App() {
  
  return (
    <GlobalProvider>
      <ProductItems />
    </GlobalProvider>
    
  )
}

export default App