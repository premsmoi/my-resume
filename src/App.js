import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills';
import resumeData from './ResumeData'

const NUMBER_OF_SECTION = 5;
const SECTION_HEADER = [
  null,
  "GENERAL",
  "EDUCATIONS",
  "EXPERIENCES",
  "PERSONAL PORTFOLIO",
  "SKILLS"
]

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      section: 0,
    }
  }

  componentDidMount() {
    this.setState({section: 1})
  }

  nextSection = () => {
    let newSection = this.state.section + 1
    if (newSection > NUMBER_OF_SECTION) {
      newSection = 1;
    }
    this.setState({section: newSection})
    console.log("Next")
  }

  previousSection = () => {
    let newSection = this.state.section-1
    if (newSection === 0) {
      newSection = 5;
    }
    this.setState({section: newSection})
    console.log("Previous")
  }

  _renderAboutMe = () => (
      <AboutMe data = {resumeData.aboutme}/>
  )

  _renderEducation = () => {
    let edu_list = []
    resumeData.educations.map((education, index) => {
      return edu_list.push(<Education key = {index} data = {education}/>)
    })

    return edu_list
  }

  _renderExperience = () => {
    let exp_list = []
    resumeData.experiences.map((exp, index) => {
      return exp_list.push(<Experience key = {index} data = {exp}/>)
    })

    return exp_list
  }

  _renderPortfolio = () => (
    <Portfolio data = {resumeData.portfolios}/>
  )

  _renderSkill = () => (
    <Skills data = {resumeData.skills}/>
  )

  _renderContent = () => {
    switch (this.state.section) {
      case 1: return this._renderAboutMe()
      case 2: return this._renderEducation()
      case 3: return this._renderExperience()
      case 4: return this._renderPortfolio()
      case 5: return this._renderSkill()
      default: return null;
    }
  }

  render() {
    console.log("Current section is "+this.state.section)
    return (
      <div className="App">
        <div style = {{display: "flex", justifyContent: "space-between"}}>
          <button onClick={this.previousSection}>Previous</button>
          <button onClick={this.nextSection}>Next</button>
        </div>
        
        <h1>{SECTION_HEADER[this.state.section]}</h1>
        {this._renderContent()}
      </div>
    );
  }
}

export default App;
