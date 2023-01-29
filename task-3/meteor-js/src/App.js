// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Template from 'react-templates';



function App() {
  const [data, setData] = useState([
    { name: 'Mia', age: '10', id: 1 },
    { name: 'Ivan', age: '35', id: 2 },
    { name: 'Elena', age: '25', id: 3 },
  ]);

  const handleClick = () => {
    console.log('Button has been clicked')
  }
  return (


    <div className="App">


      {data.map((item, i) => (
        <div className='app' key={i}>
          <p>My name is {item.name}, I am {item.age} years old.</p>

        </div>
      ))}





      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
