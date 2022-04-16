import React, { useState } from "react";
import styled from "styled-components";
import '../styles/WeatherCard.scss';
import Items from './upcommingDayForecast';
import CurrentDayForecast from './currentDayForecast';
import ToayDayForecast from './ToayDayForecast'
const WeatherCard = (props) => {
  const [forecast] = useState(props.forecast);
  console.log("lklklklk",forecast)
  return (
    <Container>
      <div className="card my-3" >
  <div className="row ">
    <div className="col-md-4">
      <div className=" img-fluid rounded-start text-center">
    {
    forecast.consolidated_weather.slice(0,1).map(data =>{
     return <ToayDayForecast data = {data} key={data.id}/>
    })
  }
  </div>
      {/* <img src="https://images.unsplash.com/photo-1597571063304-81f081944ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" className="img-fluid rounded-start" alt="..." /> */}
      {/* <img src="https://images.unsplash.com/photo-1601370552761-d129028bd833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" style={{minHeight:'500px'}} className="img-fluid rounded-start image" alt="..." /> */}
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title text-center">{forecast.title}</h2>
        {
  
  <div className="text-dark mb-3">

  {
    forecast.consolidated_weather.slice(0,1).map(today =>{
     return <CurrentDayForecast today = {today} key={today.id}/>
    })
  }
              
  </div>

}
    
        <div className="forecast bg-dark py-5 text-light">

{
  forecast.consolidated_weather.slice(1).map(days =>{
   return <Items days = {days} key={days.id}/>
  })
}
</div>
              
      </div>
    </div>
  </div>
</div>

    </Container>
  );
};
// padding: 36px;
// width: 500px;

const Container = styled.div`
  // color: #32325d;
  // margin-top: 418px;
  // margin: auto;
  // padding: 36px;

  // h1 {
  //   color: #32325d;
  //   font-size: 52px;
  //   font-weight: 600;
  //   line-height: 52px;
  //   padding-bottom: 48px;
  //   padding-top: 48px;
  //   text-align: center;
  // }
  // h6 {
  //   font-size: 2rem;
  //   margin-bottom: 32px;
  //   margin-top: 264px;
  // }
  // span {
  //   font-size: 6rem;
  //   margin-top: 32px;
  // }
`;

export default WeatherCard;
