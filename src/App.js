import logo from './logo.svg';
import './App.css';
import { Form } from './components/From/Form';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="container">
     <h1>It`s work</h1>
 
     <Routes>
    
      <Route path = {'/form'} element={<Form/>}/>
      </Routes>
      <button  className="btn">Закрыть</button>
      </div>
    
  );
}

export default App;
//     <Header/>
//   <Route index element = {<ProductList/>}/>
//onCIick = {closeEvent} 