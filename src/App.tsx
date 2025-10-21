
import { useEffect, useState, type MouseEvent } from 'react'
import Button from './components/button/Button'
import Input from './components/input/Input';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './Menu/Menu';
import { Cart } from './Cart/Cart';
import { ErrorPage } from './ErrorPage/ErrorPage';

function App() {
      const [counter, setCounter] = useState<number>(0);

      useEffect(() => {}, []);

      const addCounter = (e: MouseEvent) => {
        console.log(e);
      }


  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Button appearance='big' onClick={addCounter}>Кнопка</Button>
      <Input placeholder='Email'/>
      <div>
        <a href='/'>Меню</a>
        <a href='/cart'>Корзина</a>
      </div>
      <Routes>
        <Route path='/' element={<Menu/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App
