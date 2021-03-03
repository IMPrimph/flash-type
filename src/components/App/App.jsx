import React from 'react'
import './App.css'
import Nav from "../Nav/Nav"
import Landing from '../Landing/Landing'
import Footer from "../Footer/Footer"
import ChallangeSection from '../ChallengeSection/ChallengeSection'

const totalTime = 60;
const url = "http://metaphorpsum.com/paragraphs/1/9"

class App extends React.Component{
    state = {
        selectedParagraph: "Hello World",
        timerStarted: false,
        timeRemaining: totalTime,
        words: 0,
        characters: 0,
        wpm: 0
    }

    // life cycle method
    componentDidMount(){
        // fetch(url)
        //     .then(res => res.text())
        //     .then(info => {
        //         console.log(info)
        //         this.setState({selectedParagraph: info})   
        //     })
    }
    render() {
        return (
            <div className="app">
                {/* nav section */}
                <Nav/>

                {/* landing page */}
                <Landing/>

                {/* challenge section */}
                <ChallangeSection
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                />

                {/* Footer */}
                <Footer/>
            </div>
        )
    }
}

export default App