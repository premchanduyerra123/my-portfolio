import "./LiquidLoader.scss"
import React from 'react'

function LiquidLoader({ hidden = false }) {
    const hiddenClass = hidden ? "liquid-loader-hidden" : ""

    return (
        <div className={`liquid-loader ${hiddenClass}`}>
            <svg className="liquid-loader-blob" viewBox="0 0 200 200" aria-hidden="true">
                <path d="M100,24 C138,24 168,52 175,88 C182,124 167,163 132,176 C97,189 57,177 35,146 C13,115 12,74 38,46 C58,24 82,24 100,24 Z">
                    <animate
                        attributeName="d"
                        dur="6s"
                        repeatCount="indefinite"
                        values="
                        M100,24 C138,24 168,52 175,88 C182,124 167,163 132,176 C97,189 57,177 35,146 C13,115 12,74 38,46 C58,24 82,24 100,24 Z;
                        M104,18 C146,20 176,52 180,92 C184,132 161,170 126,182 C91,194 51,182 30,149 C9,116 10,69 40,40 C66,16 86,16 104,18 Z;
                        M96,22 C130,14 170,40 178,78 C186,116 170,162 138,176 C106,190 58,186 36,156 C14,126 16,78 40,50 C60,28 78,26 96,22 Z;
                        M100,24 C138,24 168,52 175,88 C182,124 167,163 132,176 C97,189 57,177 35,146 C13,115 12,74 38,46 C58,24 82,24 100,24 Z"
                    />
                </path>
            </svg>
        </div>
    )
}

export default LiquidLoader
