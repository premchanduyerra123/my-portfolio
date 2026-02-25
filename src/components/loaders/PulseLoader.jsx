import "./PulseLoader.scss"
import React from 'react'

function PulseLoader({ hidden = false }) {
    const hiddenClass = hidden ? "pulse-loader-hidden" : ""

    return (
        <div className={`pulse-loader ${hiddenClass}`}>
            <div className="pulse-loader-core" />
            <div className="pulse-loader-ring" />
        </div>
    )
}

export default PulseLoader
