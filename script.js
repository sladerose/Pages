document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired.');

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
            const projectList = document.querySelector('.project-list');
            if (projectList) {
                projectList.innerHTML = ''; // Clear the "Coming soon!" message
            } else {
                console.error('.project-list element not found.');
                return; // Exit if element not found
            }

            if (data.length === 0) {
                projectList.innerHTML = '<p>No public repositories found.</p>';
                return;
            }

            data.forEach(repo => {
                console.log('Processing repo:', repo.name);
                const projectItem = document.createElement('a');
                projectItem.classList.add('project-item');
                projectItem.href = repo.html_url; // Make the whole card clickable
                projectItem.target = '_blank';

                const projectName = document.createElement('h3');
                projectName.textContent = repo.name;

                const projectDescription = document.createElement('p');
                projectDescription.textContent = repo.description || 'No description provided.';

                const languagesContainer = document.createElement('div');
                languagesContainer.classList.add('languages-container');

                console.log('Fetching languages for:', repo.languages_url);
                fetch(repo.languages_url)
                    .then(langResponse => {
                        console.log('Language fetch response received for', repo.name, langResponse);
                        if (!langResponse.ok) {
                            throw new Error(`HTTP error! status: ${langResponse.status}`);
                        }
                        return langResponse.json();
                    })
                    .then(languages => {
                        console.log('Languages received for', repo.name, languages);
                        for (const lang in languages) {
                            const langPill = document.createElement('span');
                            langPill.classList.add('language-pill');
                            langPill.textContent = lang;
                            languagesContainer.appendChild(langPill);
                        }
                    })
                    .catch(langError => console.error('Error fetching languages for', repo.name, langError));

                projectItem.appendChild(projectName);
                projectItem.appendChild(projectDescription);
                projectItem.appendChild(languagesContainer);
                projectList.appendChild(projectItem);
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub projects:', error);
            const projectList = document.querySelector('.project-list');
            if (projectList) {
                projectList.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
            }
        });
});