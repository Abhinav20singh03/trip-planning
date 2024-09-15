import { useState } from 'react'
import './App.css'
import data  from "./data"
import Tours from './components/Tours';
function App() {
  const [tourdata,settourdata] = useState(data)
  function refreshhandler(){
    window.location.reload();
  }
  function removecard(id){
    const newdata = tourdata.filter((tour)=> tour.id!==id)
    settourdata(newdata);
  }
  if(tourdata.length==0){
    return(
      <div className='backup-wrapper'>
        <h1>No Tour Left</h1>
        <button className="refresh-button" onClick={refreshhandler}>Refresh</button>
      </div>
    )
  }
  return (
    <>
      <Tours tours={tourdata} removecard={removecard} />
    </>
  )
}

export default App
