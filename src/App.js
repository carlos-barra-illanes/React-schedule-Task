import './App.css';
import React from 'react';
import AppNav from './components/AppNav';
import ListDays from './components/ListDays';
import Loading from './components/Loading';
import axios from "axios";
import { useEffect, useState } from "react";
import Global from '../src/Global'
import ErrorApp from './components/ErrorApp';

function App() {
  const [days, setDays] = useState([]);
  const [hoursByDay, setHoursByDay] = useState([]);
  const [success, setSuccess] = useState(true);
  const [msje, setMsje] = useState("");

  const fetchDays = async () => {
    try {
      const { data } = await axios.get(
        Global.url
      );
      setDays(data.days);
      setHoursByDay(data.hoursByDay);
      setMsje("");
      setSuccess(true);
      
    } catch (error) {
      if (error.response) {
        // client received an error response (5xx, 4xx)
        setSuccess(false);
        setMsje(error.response.data);
      } else if (error.request) {
        // client never received a response, or request never left
        setSuccess(false);
        setMsje("No se pudo establecer coneccion con : " + Global.url );
      } else {
        // anything else
        console.log("3");
      }
     
    }
  
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchDays();
  }, []);

  return (
    <>
    <AppNav hoursByDay={hoursByDay}></AppNav>
     {success ?

     ( days.length !== 0 ?
      (<ListDays days={days} ></ListDays>)
      :
      (<Loading/>)
      ):

     (<ErrorApp msje={msje}/>)

     } 

   
   
    </>
  );
}

export default App;
