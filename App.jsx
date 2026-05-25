
export default function App() {

  const rows = [
    ['23650','2.68%','22.36%'],
    ['23700','10.74%','47.73%'],
    ['23750','3.48%','29.01%'],
    ['23800','15.09%','64.06%'],
    ['23850','5.93%','36.35%'],
    ['23900','25.38%','74.23%'],
    ['23950','30.35%','70.35%'],
    ['24000','100%','100%'],
    ['24050','28.18%','14.37%'],
    ['24100','40.45%','13.10%'],
  ]

  return (
    <div className="app">
      <div className="topbar">
        <h1>OI Vision Pro</h1>
        <div className="badge">LIVE MARKET</div>
      </div>

      <div className="info">
        <div className="card">
          <h3>NIFTY SPOT</h3>
          <p>23999.1</p>
        </div>

        <div className="card">
          <h3>PCR</h3>
          <p>1.08</p>
        </div>

        <div className="card">
          <h3>VOLUME</h3>
          <p>0.85</p>
        </div>
      </div>

      <div className="chain">
        <table>
          <thead>
            <tr>
              <th className="redbg">OI Chg (CE)</th>
              <th className="redbg">OI (CE)</th>
              <th className="bluebg">Strike</th>
              <th className="greenbg">OI (PE)</th>
              <th className="greenbg">OI Chg (PE)</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="red">{r[1]}</td>
                <td className="orange">{Math.floor(Math.random()*90)}%</td>
                <td className="strike">{r[0]}</td>
                <td className="green">{r[2]}</td>
                <td className="lightgreen">{Math.floor(Math.random()*90)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="chart">
        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=NSE:NIFTY&interval=5&theme=light"
          width="100%"
          height="500"
        ></iframe>
      </div>
    </div>
  )
}
