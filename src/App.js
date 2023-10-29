import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './Components/hooks/useTelegram';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Components/ProductList/ProducktList';
import Form from './Components/Form/Form';

function App() {
  // eslint-disable-next-line no-unused-vars
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
