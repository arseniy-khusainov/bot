import {React, useState, useCallback, useEffect} from 'react';
import  './Form.css' ;
import { useTelegram } from '../../hooks/useTelegram';
export const Form =()=>{
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [subject, setSubject] = useState('');
    const {tg} = useTelegram();
    const onSendData = useCallback (()=>{
      const data = {
        country, city, subject
      }
      tg.sendData(JSON.stringify(data))
    }, [city, country, subject])
    useEffect (()=>{
      tg.onEvent('mainButtonClicked', onSendData)
      return () =>{
        tg.offEvent('mainButtonClicked', onSendData)
      }
    })
    useEffect(()=>{
      tg.MainButton.setParams({
        text:'Отправить данные'
      })
    }, [])
    useEffect (()=>{
      if (!country || !city){
        tg.MainButton.hide();
      }else{
        tg.MainButton.show();
      }
    }, [country, city])
    const onChangeCity = (e) =>{
      setCity(e.target.value);
    }
    const onChangeCountry= (e) =>{
      setCountry(e.target.value);
    }
      
    const onChangeSubject = (e) =>{
      setSubject(e.target.value);
    }
      
      
    return (
        <div className="container">
         <h3> Введите ваши данные:</h3>
         <input
        className ="input"
        type ="text"
        placeholder ="Страна"
        value = {city}
        onChange= {onChangeCity}
        />
        <input 
        className ="input"
        type ="text"
        placeholder ="Город"
        value = {onChangeCountry}
        />
      
        <select value = {subject} onChange={onChangeSubject} className = "select">
        <option value = {"legal"}>Физ.лицо.</option>
        <option value = {"legal"}> Юр.лицо.  </option>
        </select>
        </div>
      );
    }

