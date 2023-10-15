// import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '../router';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('....something good is happening.....')
  }, []);

  return (
    <div className="App">
      <RouterProvider 
        router={router}
        fallbackElement={<div>The page is currently unavailable</div>}
        />
    </div>
  );
}

export default App;
