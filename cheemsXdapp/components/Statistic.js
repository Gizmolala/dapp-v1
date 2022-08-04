import React from 'react'

export const Statistic = ({ containerClass, heading, value, subheading }) => {
    return (
        <div className={containerClass}>
            <span className="material-icons-sharp"> account_balance </span>
            <div className="middle">
                <div className="left">
                    <h3>{heading}</h3>
                    <h1>{value}</h1>
                </div>
                {/* <div className="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="number">
                        <p>5%</p>
                    </div>
                </div> */}
            </div>
            <small className="text-muted"> {subheading} </small>
        </div>
    )
}
