import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../css/home.css";
const token = "YuHBdSlDXY000xa8IlCm7Qgq4_s";

function Home() {
  const [data, setData] = useState([]);
  console.log(data);



  useEffect(() => {
    axios("http://localhost:3001/api/v1/getAllMatches", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => setData(response.data.matches));
  }, []);

  const mostrarFecha = (fecha)=>{
    return fecha
  }

  return (
    <div>
      <div className="title">League Schedule</div>

      <div className="container">
        <div className="content-container">
          <div className="row-content title2">
            <p className="fecha">Date Time</p>
            <p className="estadio">Stadium</p>
            <p className='homeTeamFlag'>Home Team</p>
            <p className='awayTeamFlag' >Away Team</p>

          </div>
          {data.map((data, y) => {
            if(y%2 === 0) return (
            <div key={data.id} className="row-content">
              <p className="fecha">{new Date(data.matchDate).toUTCString().split(':28')[0]}</p>
              <p className="estadio"> {data.stadium}</p>
              <p className="homeTeam"> {data.homeTeam}</p>
              <img src={`https://countryflagsapi.com/png/${data.homeTeam}`}  className='homeTeamFlag'></img>
              <p className="awayTeam"> {data.awayTeam}</p>
              <p> {data.matchPlayed}</p>
              <p className="homeTeamScore">{data.homeTeamScore+' : '+data.awayTeamScore}</p>
              
              <img src={`https://countryflagsapi.com/png/${data.awayTeam}`} className='awayTeamFlag' alt="" />

              <hr style={{color:'black', height:'2px'}}/>
            </div>
          )
          else return(
            <div key={data.id} className="row-content blue">
              <p className="fecha">{new Date(data.matchDate).toUTCString().split(':28')[0]}</p>
              <p className="estadio"> {data.stadium}</p>
              <p className="homeTeam"> {data.homeTeam}</p>
              <img src={`https://countryflagsapi.com/png/${data.homeTeam}`}  className='homeTeamFlag'></img>
              <p className="awayTeam"> {data.awayTeam}</p>
              <p> {data.matchPlayed}</p>
              <p className="homeTeamScore">{data.homeTeamScore+' : '+data.awayTeamScore}</p>
              
              <img src={`https://countryflagsapi.com/png/${data.awayTeam}`} className='awayTeamFlag' alt="" />

              <hr style={{color:'black', height:'2px'}}/>
            </div>
          )
          
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
