
(async function getProjects() {
    const response = await fetch("/api/projects");
    const result = await response.json();
    const projectsDiv = document.getElementById("projects-content");
    const projectsArray = result.projects;
    projectsArray.forEach(project => {

        // SO THE STRUCTURE OF THIS HTML PAGE IS THE FOLLOWING:
        // - THE BASIS IS THE "projects-content" DIV WITH A HEADER AND MANY "project" DIVS
        // - BASICALLY I CREATE A FIRST-LEVEL DIV WITH ID "project" FOR EACH PROJECT OF THE ARRAY
        //    - THEN I CREATE 2 DIVS INSIDE THE "project" DIV:
        //       - A PIC DIV (CONTAINS PIC ONLY) &
        //       - PROJECT INFO DIV (TITLE, DESCRIPTION...)
    
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "project");

        const newPicDiv = document.createElement("div");
        newPicDiv.setAttribute("id", "pic-div");
        const projectPic = document.createElement("img");
        projectPic.classList.add("project-pic");
        projectPic.src = project.image;
        newPicDiv.appendChild(projectPic);

        const newProjectDiv = document.createElement("div");
        newProjectDiv.setAttribute("id", "project-info");

        const projectTitle = document.createElement("h2");
        projectTitle.classList.add("project-title");
        projectTitle.innerText = `${project.title}`;
        newProjectDiv.appendChild(projectTitle);

        const projectDesc = document.createElement("p");
        projectDesc.classList.add("project-desc");
        projectDesc.innerText = `${project.description}`;
        newProjectDiv.appendChild(projectDesc);

        const projectTechnologies = document.createElement("p");
        projectTechnologies.classList.add("project-technologies");
        projectTechnologies.innerText = `Technologies used: ${project.technologiesInvolved}`;
        newProjectDiv.appendChild(projectTechnologies);

        let projectURL = null;
        if (project.gitURL.includes("To be announced...")) {
            projectURL = document.createElement("p");
            projectURL.innerText = project.gitURL;
        } else {
            projectURL = document.createElement("a");
            projectURL.innerText = project.gitURL;
            projectURL.href = project.gitURL;
        }
        projectURL.classList.add("project-url");
        newProjectDiv.appendChild(projectURL);

        newDiv.appendChild(newPicDiv);
        newDiv.appendChild(newProjectDiv);

        projectsDiv.append(newDiv);
    });
})();