import './App.css';
import axios from 'axios';
import {useEffect} from 'react'

function App() {
  const url = 'https://course-api.com/react-store-products';

    const fetchData = async () => {
      try{
        const response = await axios(url);
        console.log(response)

      } catch(e){
        console.log(e.response)
      }
    }


  useEffect(() =>{
    fetchData();
  }, []);

  return (
    <div className="App">
      
      <div className="container">

      </div>

    </div>
  );
}

export default App;
