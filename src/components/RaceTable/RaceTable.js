import React from 'react';
import DateFormat from 'dateformat';
import RaceTypeIcon from '../RaceTypeIcon/RaceTypeIcon';

function RaceTable({ response, filter }) {

    function getFilteredResponse(race, index){
        return (<tr key={index}>
            <td> <RaceTypeIcon eventType={race.EventTypeDesc} /></td>
            <td>{race.EventName}</td>
            <td>{race.Venue.Venue}</td>
            <td>{DateFormat(race.AdvertisedStartTime, "dd/mm/yyyy hh:MM TT")}</td>
        </tr>);
    }

    if (response !== "") {
        return (
            <table className="table table-striped">
                <tbody>
                    {response.result.map((race, index) => {
                        if (filter === "All") { // escape filter requirement on initial load
                            return getFilteredResponse(race, index);
                        } else if(race.EventTypeDesc === filter) {
                            return getFilteredResponse(race, index);
                        }
                    })} 
                </tbody>
            </table>
        );
    } else {
        return (
            <div className="alert alert-danger">Sorry, something's gone wrong. We should be back soon!</div>
        );
    }
}

export default RaceTable;