import './App.scss';
import { Header } from './components/Header';
import { request } from './api';
import { useState, useEffect } from 'react';
import { Converter } from './components/Converter';

const App = () => {
  const [cahRates, setCashRates] = useState([]);
  const [currencies, setCurrencies] = useState(null);

  useEffect(() => {
    request('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then(data => {
      setCashRates(data)
    });
    request('https://api.exchangerate.host/latest').then(currencies => {
      setCurrencies(currencies)
    });
  }, [])

  return (
    <div className="app">
      {cahRates.length && <Header currency={cahRates} />}
      {currencies && <Converter currency={currencies} />}

    </div>
  );
}

export default App;
