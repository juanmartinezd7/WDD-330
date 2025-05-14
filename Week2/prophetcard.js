const requestURL = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const container = document.getElementById('cards-container');
const template = document.getElementById('prophet-card');

fetch(requestURL)
    .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then((data) => {
        const prophets = data.prophets;

        prophets.forEach((prophet) => {
            const clone = template.content.cloneNode(true);

            clone.querySelector('.fullname').textContent = `${prophet.name} ${prophet.lastname}`;
            clone.querySelector('.birthdate').textContent = `Date of Birth: ${prophet.birthdate}`;
            clone.querySelector('.birthplace').textContent = `Place of Birth: ${prophet.birthplace}`;

            const img = clone.querySelector('.profile');
            img.setAttribute('src', prophet.imageurl);
            img.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);

            container.appendChild(clone);
        });
    })
    .catch((error) => {
        console.error('Fetch error:', error);
        container.innerHTML = '<p>Failed to load prophet data.</p>';
    });
