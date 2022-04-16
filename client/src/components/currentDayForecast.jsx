import moment from 'moment';
import '../styles/WeatherCard.scss'

function CurrentDayForecast({ today }) {
    

    return (
        <div className='justify-content-start' >
            <span className='d-inline' style={{marginRight:'20px'}}>Predictability </span><span className='text-muted'>{today.predictability} %</span><br />
            <span className='d-inline' style={{marginRight:'20px'}}>Humidity </span><span className='text-muted'>{today.humidity}%</span><br />
            <span className='d-inline' style={{marginRight:'20px'}}>Wind </span><span className='text-muted'>{Math.round(today.wind_speed)}Km/h</span><br />
            <span className='d-inline' style={{marginRight:'20px'}}>Air Pressure </span><span className='text-muted'>{today.air_pressure}mb</span><br />
            <span className='d-inline' style={{marginRight:'20px'}}>Max Temp </span><span className='text-muted'>{Math.round(today.max_temp)}&deg;C</span><br />
            <span className='d-inline ' style={{marginRight:'20px'}}>Min Temp </span><span className='text-muted '>{Math.round(today.min_temp)}&deg;C</span>
        </div>
    )
}

export default CurrentDayForecast;