import React, { useContext } from 'react'

import { ThemeDataContext } from './context/ThemeContext';

const App = () => {
  const [theme , setTheme] = useContext(ThemeDataContext);
  const submitHandler= ()=>{
      setTheme(theme === 'light' ? 'dark' : 'light');
      
    
  }
  return (
    <div className={`min-h-screen p-10 ${theme === 'dark' ?  'bg-black text-white': 'bg-white text-black'}`}>
      <h1>This is the heading..g.g.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ratione rem esse neque sequi nam ad illo dicta cum saepe. Ullam, cupiditate ut dolor repellendus ad praesentium necessitatibus cum assumenda!
      </p>
      <button 
      onClick={submitHandler} className='bg-amber-200'>Click me!..</button>
    </div>
  )
}

export default App
