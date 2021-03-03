import React from 'react'
import TestContainer from '../TestContainer/TestContainer'
import './ChallengeSection.css'

const ChallangeSection = ({
    selectedParagraph, 
    words, 
    characters, 
    wpm, 
    timeRemaining, 
    timerStarted
}) => {
    return ( 
        <div className="challenge-section-container">
            <h1 className="challenge-section-header" data-aos="fade-down">
                Take a speed test now!
            </h1>
            <TestContainer words={words} characters={characters} wpm={wpm} timeRemaining={timeRemaining} timerStarted={timerStarted} selectedParagraph={selectedParagraph}/>
        </div>
     );
}
 
export default ChallangeSection;
