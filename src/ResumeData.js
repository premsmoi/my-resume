const data = {
    aboutme: {
        firstname: "Passakorn",
        lastname: "Hengprasert",
        address: "134/2 Na Thong Alley Lane 3, Ratchadaphisek 7 Alley, Din Daeng District, Bangkok 10400",
        email: "passakorn.heng@gmail.com",
        tel: "(+66)982621596"
    },
    educations: [{
        Institute: "Chulalongkorn University",
        location: "Bangkok, Thailand",
        from: "August 2014",
        to: "May 2018",
        degree: "Bachelor of Engineering, Computer Engineering",
        gpax: 2.44,
    }],
    experiences: [
        {
            company: "STelligence Company Limited",
            location: "Bangkok, Thailand",
            role: "Intern",
            from: "June 2017",
            to: "August 2017",
            tasks: [
                "Participated in Security operations center (SOC) project using Splunk.",
                "Developed web application on Splunk and implemented its search command using JavaScript and Python.",
                "Implemented web application as POC for a mobile service provider."
            ]
        },
        {
            company: "Chulalongkorn University",
            location: "Bangkok, Thailand",
            role: "Senior Project",
            from: "January 2018",
            to: "April 2018",
            tasks: [
                "Developed brainstorming mobile application (Android) using React Native framework and Node.js as Server-side with MongoDB as database.",
            ]
        },
        {
            company: "Bombardier Transportation Signal",
            location: "Bangkok, Thailand",
            role: "Software Engineer",
            from: "June 2018",
            to: "Present",
            tasks: [
                "Designed and developed Automatic Train Control product in CityFlo 350. Implemented software using C and SDL language.",
                "Designed and developed Signalling Platform Screen Doors Controller product in CityFlo 650. Implemented software using C language.",
                "Prepared and reviewed related design specification documents."
            ]
        },
    ],
    portfolios: [
        {
            description: "Developed Android mobile application which its main purpose is to record expense and income of everyday life and summarize them.",
            url: "https://github.com/premsmoi/SmoiApp001"
        },
        {
            description: "Senior Project React Native",
            url: "https://github.com/premsmoi/BrainstormingProject"
        },
        {
            description: "Small React Native Project",
            url: "https://github.com/premsmoi/AntVoices"
        }
    ],
    skills: [
        "Android Native",
        "React Native",
        "C/C++",
        "Java",
        "Kotlin",
        "Javascript",
    ]
}

export default data;