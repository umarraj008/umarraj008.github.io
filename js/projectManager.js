class Project {
    constructor(title, date, description, image, alt, github, release, tech) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.image = image;
        this.alt = alt;
        this.github = github;
        this.release = release;
        this.tech = tech;
    }
}

const projects = [

    new Project(
        "Photo Gallery Display App", 
        "Nov 2023", 
        "A web app that displays your photos on a display such as old iPad",
        "https://github.com/umarraj008/Photo-Gallery-Display-App/blob/main/ProjectImages/diagram.png?raw=true", 
        "Brick Breaker Image", 
        "https://github.com/umarraj008/Photo-Gallery-Display-App", 
        "https://github.com/umarraj008/Photo-Gallery-Display-App/releases/latest", 
        ["HTML5","CSS3","JavaScript","Node.JS","NPM","Express.JS","Socket.IO", "GitHub"]
    ),

    new Project(
        "Java Brick Breaker Game", 
        "Nov 2023", 
        "A Java implementation of a brick breaker game",
        "resources/projects/BrickBreaker.png", 
        "Brick Breaker Image", 
        "https://github.com/umarraj008/BrickBreaker", 
        "https://github.com/umarraj008/BrickBreaker/releases/latest", 
        ["Java","Mavern","JFrame","JPanel","GitHub"]
    ),

    new Project(
        "Cool Surveys Web App", 
        "Apr 2023", 
        "As my final year project, this website is a live survey/focus group tool. This tool allows users to create surveys, and distribute them and gain live data and results on their surveys. In addition, users will be able to gain access to surveys and participate effectively through the web app. I aimed to create an easy and simple to use web application that allows anyone to create or participate in surveys, and easily conduct research.", 
        "resources/projects/CoolSurveys.png", 
        "Cool Surveys Image", 
        "https://github.com/umarraj008/Survey-Tool", 
        "https://github.com/umarraj008/Survey-Tool/releases/latest", 
        ["HTML5","CSS3","JavaScript","PHP","MySQL","Charts.js","GitHub"]
    ),

    new Project(
        "Park It Android App", 
        "Feb 2023", 
        "This is a car parking app created in mobile design and development module for university.", 
        "https://github.com/umarraj008/Car-Parking-App/blob/master/app/src/main/app_logo_icon-playstore.png?raw=true", 
        "ParkIt Image", 
        "https://github.com/umarraj008/Car-Parking-App", 
        "https://github.com/umarraj008/Car-Parking-App/releases/latest", 
        ["Java","Android Studio",]
    ),

    new Project(
        "Elemental 4 Web Game", 
        "Apr 2022", 
        "During my second year in university, I was project manager and lead developer in our team project module. We had a small team of 10 individuals, where we developed a web base game. This game was an online action-fantasy turn based game.", 
        "https://raw.githubusercontent.com/umarraj008/Elemental4Game/Minification/Source/resources/images/githubLogopng.png", 
        "Elemental 4 Image", 
        "https://github.com/umarraj008/Elemental4Game", 
        "https://github.com/umarraj008/Elemental4Game/releases/latest", 
        ["HTML5","CSS3","JavaScript","Node.JS","Express.js","Socket.IO","MySQL","GitHub"]
    ),
    
];

const addProjectsToList = function() {
    projects.forEach(p => {
        let br = document.createElement("br");

        let projectItem = document.createElement("div");
        projectItem.setAttribute("class", "projectItem");
        
        let leftSection = document.createElement("div");
        leftSection.setAttribute("id", "leftSection");
        
        let img = document.createElement("img");
        img.src = p.image;
        img.alt = p.alt;

        let rightSection = document.createElement("div");
        rightSection.setAttribute("id", "rightSection");        

        let topSection = document.createElement("div");
        topSection.setAttribute("id", "topSection");

        let projectTitle = document.createElement("h2");
        projectTitle.innerHTML = p.title;

        let projectDate = document.createElement("h3");
        projectDate.innerHTML = p.date;

        let projectDescription = document.createElement("p");
        projectDescription.innerHTML = p.description;

        let projectButtonContainer = document.createElement("div");
        projectButtonContainer.setAttribute("id", "projectButtonContainer");
        
        let projectButton = document.createElement("div");
        projectButton.setAttribute("class", "projectButton");
        projectButton.innerHTML = "GitHub Repository";
        projectButton.onclick = function() { window.open(p.github, '_blank'); };
        
        let projectReleaseButton = document.createElement("div");
        projectReleaseButton.setAttribute("class", "projectButton");
        projectReleaseButton.innerHTML = "Latest Release";
        projectReleaseButton.onclick = function() { window.open(p.release, '_blank'); };

        let bottomSection = document.createElement("div");
        bottomSection.setAttribute("id", "bottomSection");

        let h3 = document.createElement("h3");
        h3.innerHTML = "Technologies";

        let techStackContainer = document.createElement("div");
        techStackContainer.setAttribute("id", "techStackContainer");

        p.tech.forEach(t => {
            let techStackItem = document.createElement("div");
            techStackItem.setAttribute("class", "techStackItem");
    
            let p = document.createElement("p");
            p.innerHTML = t;
            
            techStackItem.appendChild(p);
            techStackContainer.appendChild(techStackItem);
        });

        bottomSection.appendChild(h3);
        bottomSection.appendChild(techStackContainer);
        
        projectButtonContainer.appendChild(projectButton);
        projectButtonContainer.appendChild(projectReleaseButton);

        topSection.appendChild(projectTitle);
        topSection.appendChild(projectDate);
        topSection.appendChild(projectDescription);
        topSection.appendChild(br.cloneNode());
        topSection.appendChild(projectButtonContainer);
        topSection.appendChild(br.cloneNode());

        rightSection.appendChild(topSection);
        rightSection.appendChild(bottomSection);

        leftSection.appendChild(img);

        projectItem.appendChild(leftSection);
        projectItem.appendChild(rightSection);

        // console.log(projectItem);

        let projectsContainer = document.getElementsByClassName("projectContainer")[0];
        projectsContainer.appendChild(projectItem);
    });
}

const updateCopyright = function() {
    let date = new Date();
    document.getElementById("copyright").innerHTML = "Copyright ©" + date.getFullYear() + " Umar Rajput";
}

window.addEventListener("DOMContentLoaded", () => {
    addProjectsToList();
    updateCopyright();
});
