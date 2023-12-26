import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className="basic">
          <input type="text" placeholder="+200 new phone" />
          <input type="datetime-local" />
        </div>
        <div className='desc'>
          <input type="text" placeholder="Description" />
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
