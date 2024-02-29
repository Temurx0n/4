
import './App.css';

function App() {
  return (
    <form className="box">
      <input type="text" className="input" placeholder='User Name' required/>
      <input type="email" className="input" placeholder='E-mail' required />
      <input type="password" className="input" placeholder='password' required />
      <button className="btn">Registr</button>
    </form>

  );
}
const inputEl = document.querySelector('.input');
const btnEl = document.querySelector('.btn');
btnEl.addEventListener('click', () =>{
  localStorage.setItem(inputEl)
  // localStorage.removeItem(inputEl)
})

export default App;
