import moment from 'moment';
const imgUrlBase = 'https://www.metaweather.com/static/';

function ToayDayForecast({data}) {
const getWeekday = date => moment(date).format('dddd').substring(0, 3);
    
    return(
        <div className='img'>
        <img className="mb-2" width="80" src={`${imgUrlBase}img/weather/${data.weather_state_abbr}.svg`} alt="" />
            <p style={{fontSize:'20px'}}>{moment(data.applicable_date).format('dddd')}</p>
            <p style={{fontSize:'20px'}}>{moment(data.applicable_date).format('MMMM Do')}</p>
            
            <div style={{marginTop:'200px'}}>
            <h5 className="font-weight-bold">{Math.round(data.max_temp)}&deg;C</h5>
            <p style={{fontSize:'20px'}}>{data.weather_state_name}</p>
            </div>
        </div>
    )
}

export default ToayDayForecast;