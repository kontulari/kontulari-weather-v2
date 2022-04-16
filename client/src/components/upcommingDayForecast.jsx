import moment from 'moment';
const imgUrlBase = 'https://www.metaweather.com/static/';

function Items({days}) {
const getWeekday = date => moment(date).format('dddd').substring(0, 3);
    
    return(
        <div className=''>
        <img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${days.weather_state_abbr}.svg`} alt="" />
            <h5>{getWeekday(days.applicable_date)}</h5>
            <h5 className="font-weight-bold">{Math.round(days.max_temp)}&deg;C</h5>
        </div>
    )
}

export default Items;