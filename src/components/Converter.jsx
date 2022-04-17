import { useState } from "react"

export const Converter = ({ currency }) => {
  const [leftCurrency, setLeftCurrency] = useState(Object.keys(currency.rates)[0]);
  const [rightCurrency, setRightCurrency] = useState(Object.keys(currency.rates)[0]);

  const [leftInput, setLeftInput] = useState(1);
  const [rightInput, setRightInput] = useState(1);

  const handleInput = (value, input, output, setInput) => {
    const inputRate = Object.entries(currency.rates).find(item => item[0] === input)[1];
    const outputRate = Object.entries(currency.rates).find(item => item[0] === output)[1];

    const result = +(+value / outputRate * inputRate).toFixed(2);
    setInput(result);
  }

  return (
    <main>
      <div className="converter">
        <div className="converter__container">

          <select
            name="firstCurrency"
            className="converter__select"
            value={leftCurrency}
            onChange={(e) => {
              setLeftCurrency(e.target.value);
              handleInput(leftInput, rightCurrency, e.target.value, setRightInput);
            }}
          >
            {Object.keys(currency.rates).map(curr => (
              <option
                value={curr}
                key={curr}
              >
                {curr}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="converter__input"
            value={leftInput}
            onChange={(e) => {
              setLeftInput(e.target.value);
              handleInput(e.target.value, rightCurrency, leftCurrency, setRightInput);
            }}
          />
        </div>

        <div className="converter__equal-sign">=</div>

        <div className="converter__container">
          <select
            name="secondCurrency"
            className="converter__select"
            value={rightCurrency}
            onChange={(e) => {
              setRightCurrency(e.target.value);
              handleInput(rightInput, leftCurrency, e.target.value, setLeftInput);
            }}
          >
            {Object.keys(currency.rates).map(curr => (
              <option
                value={curr}
                key={curr}
              >
                {curr}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="converter__input"
            value={rightInput}
            onChange={(e) => {
              setRightInput(e.target.value)
              handleInput(e.target.value, leftCurrency, rightCurrency, setLeftInput);
            }}
          />
        </div>
      </div>
    </main>
  )
}
