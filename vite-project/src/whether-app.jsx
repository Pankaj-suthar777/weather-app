import InputBox from './inputBox.jsx'
import InfoBox from './infoBox.jsx'
import { useState } from 'react'

export default function WeatherApp(){
    const [info,setInfo] = useState( {
        city : 'Delhi',
        feelsLike : 23.89,
            humidity : 53,
            temp :  24.05,
            tempMax : 24.05,
            tempMin : 24.05,
            weather : 'smoke',
    })
    function updateWeather(newValue){
     setInfo(newValue);
    }
    return (
        <>
        <InputBox update={updateWeather}></InputBox>
        <InfoBox info={info}></InfoBox>
       </>
    )
}