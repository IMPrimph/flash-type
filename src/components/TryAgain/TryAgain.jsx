import React, { Component } from 'react'
import './TryAgain.css'

const TryAgain = ({words, characters, wpm}) => {
    return ( 
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters: </b> {characters}
                </p>
                <p>
                    <b>Words: </b> {words}
                </p>
                <p>                    
                    <b>Speed: </b> {wpm} wpm
                </p>
            </div>
            {/* retry button */}
            <div>
                <button
                    // onClick={() => startAgain()}
                    className="end-buttons start-again-btn"
                >
                    Retry
                </button>
            </div>
        </div>
     );
}
 
export default TryAgain;