// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#9d1dd7",
    LinkHighlightColor: "#9d1dd7"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// 👋 Greeting Section
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Md. Samiul Hoque",
    message: "I'm an Android App Developer. Currently working as Senior App Developer at Shadhin Fintech Ltd.",
    basedLocation: "Dhaka, Bangladesh",
    resumeLink: "https://docs.google.com/forms/d/e/1FAIpQLSegU1j6JYo6lMz02WU7_7Td312eO7SK3CMbOZlb_-jXpvCLXw/viewform",
    logo: {
        link: "images/initials.png",
        custom: true
    },
    portraitLink: 'images/portrait.png'
}

const socialMediaLinks = {
    github: "https://github.com/samiulhoquelimo",
    linkedin: "https://www.linkedin.com/in/samiul-hoque-limo-41b64a136/",
    medium: "https://medium.com/@samiul.limo",
    stackoverflow: "https://stackoverflow.com/users/4379816/samiul-hoque-limo"
}

// 😎 About Section
const about = {
    autobiography: [
        "My name is Md. Samiul Hoque and I'm an Android App Developer. Currently working as Senior App Developer. Completed MSCS from American International University - Bangladesh (AIUB). I have a passion for coding in languages such as Kotlin, Java, PHP, JavaScipt. Work in android development native, flutter, vue.js, react, next.js and also have experience with Laravel frameworks.",
        "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner. Programming for 8+ years and have 4 years of experience in backend development. Currently working as a app development in Shadhin Fintech Ltd."
    ],
    techStack: [
        "Kotlin",
        "JAVA",
        "PHP",
        "JavaScript",
        "Vue.js",
        "Next.js",
        "React",
        "Dart",
        "MySQL",
        "Swift"
    ],
    photo1Link: "images/portrait-1.jpg",
    photo2Link: "images/portrait-2.jpg",
    photo3Link: "images/portrait-3.jpg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Senior Application Developer",
        company: {
            name: "Shadhin Fintech Ltd",
            link: "https://shadhinbd.com/"
        },
        duration: "Mar 2020 - Continuing",
        bulletPoints: [],
        hashtags: [
            "Android",
            "Kotlin",
            "Java",
            "Laravel",
            "PHP",
            "MySQL",
            "JS",
            "Vue.js",
            "Next.js",
            "HTML",
            "Tailwind"
        ]
    },
]

// 💻 Work Section
const works = [
    {
        projectName: "Shadhin",
        yearCompleted: "2020",
        description: "Shadhin Fintech is a leading and internationally awarded Fintech Company (Registered in BASIS) with the goal of providing technology to Banks, MFIs, NBFIs and other financial institutions to simplify their process.\n" +
            "\n" +
            "We are backed by several reputable organizations including Bangladesh Angels Network, UNDP and the Turkish Government.\n" +
            "\n" +
            "Shadhin provides financial technology services that aim to simplify the financial sector of Bangladesh with the goal of boosting financial inclusion.\n" +
            "\n" +
            "We provide services to regulated financial institutions e.g. Banks, MFIs, MFS and NBFIs.\n" +
            "\n" +
            "Our services include: Loan Management System, ERP Systems, Back End Accounting & Reporting, Outsourced Recovery Services, NID Verification Services and Credit Scoring.",
        techStack: "Android Native",
        links: [
            {
                label: "Google Play Store",
                type: "external",
                url: "https://play.google.com/store/apps/details?id=com.shadhinbd.investee"
            },
        ],
        imageLink: "images/shadhin-1.png",
        alignLeft: false
    },
    {
        projectName: "Shadhin Investor",
        yearCompleted: "2020",
        description: "• Welcome to Bangladesh’s first Peer to Peer Funding App. Connecting you to peers to help you achieve your life goals!\n" +
            "\t• Welcome to Bangladesh’s First Peer to Peer Funding Marketplace\n" +
            "\t• Invest in Individuals and Businesses to Diversify your Portfolio\n" +
            "\t• Zero Paperwork, Invest Quickly &amp; Easily\n" +
            "\t• Provide Funding for as Low as 100,000 Taka and up to 9,00,000 Taka with a High Return\n" +
            "        • Invest in Shadhin Verified Applicants\n" +
            "        • Shadhin provides Gini Score for every Individuals (Score based on Artificial Intelligence Algorithm)\n" +
            "\n" +
            "\n" +
            "The first release ever of this awesome app!\n" +
            "Enjoy and let us know what do you think of our app.",
        techStack: "Android Native",
        links: [
            {
                label: "Google Play Store",
                type: "external",
                url: "https://play.google.com/store/apps/details?id=com.shadhinbd.investor"
            },
        ],
        imageLink: "images/shadhin-2.png",
        alignLeft: true
    },
]

const archiveLink = "https://github.com/samiulhoquelimo?tab=repositories"

// 📭 Contact Section
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking Android App Development (Native) as a Senior Developer/Project Manager in the Software Company.",
            "Also looking to build a team for project & startup ideas or just make professional connections."
        ],
        link: {
            email: "",
            other: "https://forms.gle/HRKzoVRSY78BTyQu9"
        },
        responseTimeMessage: "...and I'll respond within the next 24hrs"
    },
    formEmbedLink: ""
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}