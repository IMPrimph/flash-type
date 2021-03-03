import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import './TestContainer.css'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'

const TestContainer = ({
    selectedParagraph, 
    words, 
    characters, 
    wpm, 
    timeRemaining, 
    timerStarted
}) => {
    return ( 
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-container">
                        <TypingChallengeContainer 
                            words={words} 
                            characters={characters} 
                            wpm={wpm}
                            timeRemaining={timeRemaining}
                            timerStarted={timerStarted}
                            selectedParagraph={selectedParagraph}
                        />
                    </div>
                ) : (
                    <div className="try-again-cont">
                        <TryAgain words={words} characters={characters} wpm={wpm}/>
                    </div> 
                )
            }
        </div>
     );
}
 
export default TestContainer;
