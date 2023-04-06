
import './App.css';
import JSONDATA from './MOCK_DATA.json'
import { useState} from 'react';
//Search Functionality
function App() {
  const [serachTerm, setSearchTerm] = useState('');
  return <div className='App'><input type="text" placeholder="Search..." onChange={event =>{
    setSearchTerm(event.target.value);
  }} />
  {JSONDATA.filter(val=> {
    if(serachTerm ==""){
      return val
    } else if (val.first_name.toLowerCase().includes(serachTerm.toLowerCase())){
      return val
    }
  }).map((val, key) => {
    return<div><p>{val.first_name}</p></div>;
  })}
  </div>
}
//comment
export default App;
