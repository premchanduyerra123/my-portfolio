import "./CoffeeLoader.scss"
import React from 'react'

function CoffeeLoader({ hidden = false }) {
    const hiddenClass = hidden ? "coffee-loader-hidden" : ""

    return (
        <div className={`coffee-loader ${hiddenClass}`}>
            <div className="coffee-loader-steam coffee-loader-steam-1" />
            <div className="coffee-loader-steam coffee-loader-steam-2" />
            <div className="coffee-loader-steam coffee-loader-steam-3" />

            <div className="coffee-loader-cup">
                <div className="coffee-loader-liquid" />
                <div className="coffee-loader-handle" />
            </div>
        </div>
    )
}

export default CoffeeLoader
