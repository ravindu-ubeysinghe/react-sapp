import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import RaceTable from '../RaceTable/RaceTable';
import RaceFilters from '../RaceFilters/RaceFilters';
import axios from 'axios';

const appName = "The Event Schedule";
const siteLogo = "https://cdn.racing.com/-/media/racing/generic/beteasy.jpg";
const beApiUrl = "https://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump";

function EventSchedule() {
  const [apiResult, setApiResult] = useState("");
  const [raceFilter, setRaceFilter] = useState("All");

  // render only once, anything beyond this point will keep rendering non-stop
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(beApiUrl);
      setApiResult(response.data); //Fetch data from the response
    }
    fetchData();
  }, []);

  return (
    <div className="main">
      <Header siteName={appName} siteLogo={siteLogo} />
      <div className="site-content">
        <div className="container">
            <RaceFilters setFilter={setRaceFilter} />
            <RaceTable response={apiResult} filter={raceFilter} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventSchedule;
