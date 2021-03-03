import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({
    selectedParagraph, 
    words, 
    characters, 
    wpm, 
    timeRemaining, 
    timerStarted
}) => {
    return ( 
        <div className="typing-challenge-container">
            {/* details section */}
            <div className="details-container">
                {/* words typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words}/>

                {/* characters typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>

                {/* speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm}/>
            </div>

            {/* the real typing container */}
            <div className="typewriter-container">
                <TypingChallenge timerStarted={timerStarted} timeRemaining={timeRemaining} selectedParagraph={selectedParagraph}/>
            </div>
        </div>
     );
}
 
export default TypingChallengeContainer;