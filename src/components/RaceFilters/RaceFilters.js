import React from 'react';
import RaceTypeIcon from '../RaceTypeIcon/RaceTypeIcon';

function RaceFilters({ setFilter }) {

    return (
        <div className="filter-menu">
            {(() => {
                const renderedFilters = [];
                const filterSet = ["All", "Thoroughbred", "Trots", "Greyhounds"];

                let i = 0;

                filterSet.forEach((filter) => {
                    renderedFilters.push(<button key={i} value={filter} onClick={e => setFilter(e.currentTarget.value)}><RaceTypeIcon eventType={filter} /></button>);
                    i++;
                })

                return renderedFilters;
            })()}
        </div>
    );
}

export default RaceFilters;

