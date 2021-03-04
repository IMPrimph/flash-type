import React from 'react'
import './App.css'
import Nav from "../Nav/Nav"
import Landing from '../Landing/Landing'
import Footer from "../Footer/Footer"
import ChallangeSection from '../ChallengeSection/ChallengeSection'

const totalTime = 60;
const url = "http://metaphorpsum.com/paragraphs/1/9"
const defaultState = {
    selectedParagraph: "",
    timerStarted: false,
    timeRemaining: totalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: []
}

class App extends React.Component {
    state = defaultState

    fetchNewParagraph() {
        fetch(url)
            .then(res => res.text())
            .then(info => {
                this.setState({ selectedParagraph: info })
                const selectedParagraphArray = info.split("")
                const testInfo = selectedParagraphArray.map(selectedLetter => {
                    return {
                        testLetter: selectedLetter,
                        status: 'notAttempted'
                    }
                })
                this.setState({ ...defaultState, testInfo: testInfo, selectedParagraph: info })
            })
    }

    // life cycle method
    componentDidMount() {
        this.fetchNewParagraph()
    }

    startAgain = () => {
        this.fetchNewParagraph()
    }

    handleUserInput = (inputValue) => {
        if (!this.state.timerStarted) {
            this.startTimer()
        }
        const characters = inputValue.length;
        const words = inputValue.split(" ").length
        const index = characters - 1

        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: 'notAttempted'
                    },
                    ...this.state.testInfo.slice(1)
                ],
                characters,
                words
            })
            return;
        }

        if (index >= this.state.selectedParagraph.length) {
            this.setState({ characters, words });
            return
        }

        //make a copy of testInfo
        const testInfo = this.state.testInfo
        if (!(index === this.state.selectedParagraph.length - 1)) {
            testInfo[index + 1].status = 'notAttempted'
        }

        //check for the correctly typed letters
        const isCorrect = inputValue[index] === testInfo[index].testLetter;

        //update the testInfo
        testInfo[index].status = isCorrect ? 'correct' : 'incorrect'

        //update the state
        this.setState({
            testInfo,
            words,
            characters
        })
    }

    startTimer = () => {
        this.setState({ timerStarted: true })
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                // change the wpm
                const timeSpent = totalTime - this.state.timeRemaining
                const wpm = timeSpent > 0
                    ? (this.state.words / timeSpent) * totalTime
                    : 0
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm)
                })
            } else {
                clearInterval(timer)
            }
        }, 1000)
    }

    render() {
        return (
            <div className="app">
                {/* nav section */}
                <Nav />

                {/* landing page */}
                <Landing />

                {/* challenge section */}
                <ChallangeSection
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />

                {/* Footer */}
                <Footer />
            </div>
        )
    }
}

export default App