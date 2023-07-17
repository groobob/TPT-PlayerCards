import React from "react";

export default function Cards(props)
{
    return(
        <div className="card">
            <img src={`/images/icons/${props.icon}`} className="card--icon"/>
            <div className="card--stats">
                <span>APM|{props.stats.apm} • </span>
                <span>PPS|{props.stats.pps} • </span>
                <span>VS|{props.stats.vs} </span>
            </div>
            <p className="card--rating">TR RATING | {props.tr}</p>
            <div className="card--records">
                <div className="card--subtitles">
                    <p className="card--subtitle">SPRINT</p>
                    <p className="card--subtitle">BLITZ</p>
                    <p className="card--subtitle">ZEN</p>
                    
                </div>
                <div className="card--scores">
                    <p className="card--score">{props.sprint}</p>
                    <p className="card--score">{props.blitz}</p>
                    <p className="card--score">{props.zen}</p>
                </div>
            </div>
            <a href={`https://ch.tetr.io/u/${props.link}`} target="_blank" className="card--channelpage">CURRENT TETRA CHANNEL PAGE</a>
        </div>
    )
}