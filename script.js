document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired.');

    // Set this to true to use hardcoded projects, false to fetch from GitHub API
    const useHardcodedProjects = true;

    const hardcodedProjects = [
        {
            name: 'Hardcoded Project 1',
            html_url: 'https://github.com/sladerose/hardcoded-project-1',
            description: 'This is the description for hardcoded project 1. It showcases a simple web application.',
            languages: { JavaScript: 10000, HTML: 5000 }
        },
        {
            name: 'Hardcoded Project 2',
            html_url: 'https://github.com/sladerose/hardcoded-project-2',
            description: 'A second example project, demonstrating responsive design principles.',
            languages: { CSS: 8000, HTML: 4000 }
        },
        {
            name: 'Hardcoded Project 3',
            html_url: 'https://github.com/sladerose/hardcoded-project-3',
            description: 'A small utility tool built with Python, focusing on data processing.',
            languages: { Python: 12000 }
        },
        {
            name: 'Hardcoded Project 4',
            html_url: 'https://github.com/sladerose/hardcoded-project-4',
            description: 'An interactive data visualization project using D3.js.',
            languages: { JavaScript: 15000, HTML: 7000, CSS: 3000 }
        },
        {
            name: 'Hardcoded Project 5',
            html_url: 'https://github.com/sladerose/hardcoded-project-5',
            description: 'A simple mobile application prototype developed with React Native.',
            languages: { JavaScript: 20000 }
        },
        {
            name: 'Hardcoded Project 6',
            html_url: 'https://github.com/sladerose/hardcoded-project-6',
            description: 'Backend API service built with Node.js and Express.',
            languages: { JavaScript: 18000 }
        },
        {
            name: 'Hardcoded Project 7',
            html_url: 'https://github.com/sladerose/hardcoded-project-7',
            description: 'A machine learning model for sentiment analysis.',
            languages: { Python: 25000 }
        },
        {
            name: 'Hardcoded Project 8',
            html_url: 'https://github.com/sladerose/hardcoded-project-8',
            description: 'A personal blog site created with Jekyll.',
            languages: { Ruby: 9000, HTML: 6000, CSS: 4000 }
        },
        {
            name: 'Hardcoded Project 9',
            html_url: 'https://github.com/sladerose/hardcoded-project-9',
            description: 'A command-line interface (CLI) tool for file management.',
            languages: { Go: 11000 }
        },
        {
            name: 'Hardcoded Project 10',
            html_url: 'https://github.com/sladerose/hardcoded-project-10',
            description: 'An e-commerce front-end using Vue.js.',
            languages: { JavaScript: 17000, HTML: 8000, CSS: 5000 }
        }
    ];

    const renderProjects = (projects) => {
        const projectList = document.querySelector('.project-list');
        if (!projectList) {
            console.error('.project-list element not found.');
            return;
        }
        projectList.innerHTML = ''; // Clear any existing content

        if (projects.length === 0) {
            projectList.innerHTML = '<p>No projects found.</p>';
            return;
        }

        projects.forEach(project => {
            const projectItem = document.createElement('a');
            projectItem.classList.add('project-item');
            projectItem.href = project.html_url;
            projectItem.target = '_blank';

            const projectName = document.createElement('h3');
            projectName.textContent = project.name;

            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description || 'No description provided.';

            const languagesContainer = document.createElement('div');
            languagesContainer.classList.add('languages-container');

            // For hardcoded projects, languages are directly available
            if (project.languages) {
                for (const lang in project.languages) {
                    const langPill = document.createElement('span');
                    langPill.classList.add('language-pill');
                    langPill.textContent = lang;
                    languagesContainer.appendChild(langPill);
                }
            }

            projectItem.appendChild(projectName);
            projectItem.appendChild(projectDescription);
            projectItem.appendChild(languagesContainer);
            projectList.appendChild(projectItem);
        });
    };

    if (useHardcodedProjects) {
        console.log('Using hardcoded projects.');
        renderProjects(hardcodedProjects);
    } else {
        console.log('Fetching live projects from GitHub API.');
        fetch('https://api.github.com/users/sladerose/repos')
            .then(response => {
                console.log('Repo fetch response received.', response);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Repo data received:', data);
                renderProjects(data); // Use the new render function
            })
            .catch(error => {
                console.error('Error fetching GitHub projects:', error);
                const projectList = document.querySelector('.project-list');
                if (projectList) {
                    projectList.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
                }
            });
    }
});