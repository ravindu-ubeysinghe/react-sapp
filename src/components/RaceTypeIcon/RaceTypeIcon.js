import React from 'react';

function RaceTypeIcon({eventType}) {
    switch (eventType) {
        case "Thoroughbred":
            return (<img srcSet="https://beteasy.com.au/promotionslanding/wp-content/uploads/sites/2/2018/10/icon-horse.png" alt={eventType} />);
        case "Trots":
            return (<img srcSet="https://beteasy.com.au/promotionslanding/wp-content/uploads/sites/2/2018/10/icon-harness.png" alt={eventType} />);
        case "Greyhounds":
            return (<img srcSet="https://beteasy.com.au/promotionslanding/wp-content/uploads/sites/2/2018/10/icon-dogs.png" alt={eventType} />);
        default:
            return (<img srcSet="https://upload.wikimedia.org/wikipedia/commons/9/94/BetEasy_Logo_Corporate_RGB.jpg" alt={eventType} />);
    }
}

export default RaceTypeIcon;