import React  from 'react';

export default function FormattedDate (props) {

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = "0" + props.date.getMinutes();

    let fulldate = day+' '+hours + ':' + minutes.substr(-2)  ;


    return(
            <div>{fulldate}</div>
    );
}