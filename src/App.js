import './App.css';
import { useState } from 'react';


function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [desc, setDesc] = useState('');
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transactions';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, desc, datetime })
    }).then(res => {
      res.json().then(json => {
        console.log('result', json);
      });
    });
  }

  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder="+200 new phone" />
          <input
            type="datetime-local"
            value={datetime}
            onChange={ev => setDatetime(ev.target.value)} />
        </div>
        <div className='desc'>
          <input type="text"
            value={desc}
            onChange={ev => setDesc(ev.target.value)}
            placeholder="Description" />
        </div>
        <button type="submit" className="btn">Add Transaction</button>
      </form>
      <div className='transactions'>
        <div className="transaction">
          <div className='left'>
            <div className='name'>TV</div>
            <div className='desc'>It was time for new TV</div>
          </div>
          <div className='right'>
            <div className='price red'>-$200.00</div>
            <div className='datetime'>12-02-2022 08:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className='left'>
            <div className='name'>Salary</div>
            <div className='desc'>It was time for new phone</div>
          </div>
          <div className='right'>
            <div className='price green'>+$800.00</div>
            <div className='datetime'>12-02-2022 08:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className='left'>
            <div className='name'>iPhone</div>
            <div className='desc'>It was time for new phone</div>
          </div>
          <div className='right'>
            <div className='price red'>-$900.00</div>
            <div className='datetime'>12-02-2022 08:00</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
