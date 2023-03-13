import {useEffect, useState} from 'react'
import WeatherForm from './WeatherForm'
import WeatherMainInfo from './WeatherMainInfo'
import styles from './WeatherApp.module.css'
import Loading from './Loading'


export default function WeatherApp(){
    const [weather, setWeather] = useState(null)
    const [error, setError] =useState(false)

    useEffect(()=>{
    loadInfo()
    },[])
    
    useEffect(()=>{
        document.title = `Weather | ${weather?.location.name ?? ""}`
    },[weather])

    async function loadInfo(city = "london"){
        try {
            const req = await fetch(`http://api.weatherapi.com/v1/current.json?aqi=no&key=c71b9d60fef64c12803131354231303&q=${city}`)
            const json = await req.json()
            if(json.error){
                setError(true)
            } else {
                setError(false)
                setWeather(json)}
        } catch (error) {
        }
    }

    function handleChangeCity(city){
        loadInfo(city)
    }
    return <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity}/>
        {weather ?  <WeatherMainInfo error={error} weather={weather}/> : <Loading />}
       
    </div>
}