import TextField from '@mui/material/TextField';
import './inputBox.css'
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function InputBox({update}){
    const [city,setCity] = useState('')
    function changeInput(e){
        setCity(e.target.value);
    }
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
    const KEY = '7562d5ca5fba02f0e16b6bdcd280d159';

    let getWhetherInfo = async () => {
        let res = await fetch(`${API_URL}?q=${city}&appid=${KEY}&units=metric`)
        let jsonRes = await res.json();
        let result = {
            city : city,
            feelsLike : jsonRes.main.feels_like,
            humidity : jsonRes.main.humidity,
            temp : jsonRes.main.temp,
            tempMax : jsonRes.main.temp_max,
            tempMin : jsonRes.main.temp_min,
            weather : jsonRes.weather[0].description,
        }
        console.log(result)
        return result;
    }

   

    let handleSubmit = async (e) => {
       e.preventDefault()
       setCity('')
       update( await getWhetherInfo());
    }
    return (
        <div className='input'>
        <h2>Whether App</h2>
        <form onSubmit={handleSubmit}>
            <TextField id="city" value={city} onChange={changeInput} label="City Name" variant="filled" />
            <br></br><br></br>
            <Button variant="contained" type='submit'>Submit</Button>
            </form>
        </div>
    )
}