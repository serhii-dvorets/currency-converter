export const Header = ({ currency }) => {
  const usd = currency.find(item => item.ccy === 'USD')
  const euro = currency.find(item => item.ccy === 'EUR')

  return (
    <header className="header">
      <h1 className="header__title">CURRENCY CONVERTER</h1>
      <div className="courses">
        <table className="courses__table">
          <thead>
            <tr>
              <th>Cash rates</th>
              <th>Buy</th>
              <th>Sell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EUR</td>
              <td>{euro.buy}</td>
              <td>{euro.sale}</td>
            </tr>
            <tr>
              <td>USD</td>
              <td>{usd.buy}</td>
              <td>{usd.sale}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </header>
  )
}
