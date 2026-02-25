import "./HologramLoader.scss"
import React from 'react'

function HologramLoader({ hidden = false }) {
    const hiddenClass = hidden ? "hologram-loader-hidden" : ""

    return (
        <div className={`hologram-loader ${hiddenClass}`}>
            <div className="hologram-loader-body">
                <svg className="hologram-loader-figure" viewBox="0 0 120 160" aria-hidden="true">
                    <g>
                        <circle cx="60" cy="34" r="14" />
                        <path d="M36 62c0-12 10-22 24-22h0c14 0 24 10 24 22v40H36V62z"/>
                    </g>
                </svg>
                <div className="hologram-loader-scanline" />
            </div>
        </div>
    )
}

export default HologramLoader
