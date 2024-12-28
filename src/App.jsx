import thenetaLogo from './assets/theneta.svg';
import './App.css';

function App() {
  return (
    <div id='app'>
      <div>
        <a href='https://theneta.site' target='_blank'>
          <img src={thenetaLogo} className='logo' alt='Theneta logo' />
        </a>
      </div>
      <h1>Theneta</h1>
      <div className='card'>
        <p>Share your routine with others!</p>
        <p className='read-the-docs'>
          Inspire each other and lead a successful life!
        </p>
      </div>
    </div>
  );
}

export default App;
