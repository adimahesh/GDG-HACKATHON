async function fetchDiseases() {
    const response = await fetch('content.json'); // Ensure this points to your JSON file
    const data = await response.json();
    return data.diseases;
}

function displayDiseases(diseases) {
    const diseaseList = document.getElementById('disease-list');
    diseaseList.innerHTML = ''; // Clear previous results

    if (diseases.length === 0) {
        // If no diseases are found, display a "Not Found" message
        const notFoundMessage = document.createElement('div');
        notFoundMessage.className = 'not-found';
        notFoundMessage.innerHTML = `<h2>No Diseases Found</h2>`;
        diseaseList.appendChild(notFoundMessage);
        return;
    }


    diseases.forEach(disease => {
        const diseaseDiv = document.createElement('div');
        diseaseDiv.className = 'disease';
        diseaseDiv.innerHTML = `
            <img src="${disease.imageUrl}" alt="${disease.name}" class="image">
            <div>
                <h2>${disease.name}</h2>
                <p>${disease.description}</p>
                <h3>Symptoms:</h3>
                <ul>
                    ${disease.symptoms.map( symptoms=> `<li>${symptoms}</li>`).join('')}
                </ul>
                <h3>Prevention:</h3>
                <ul>
                    ${disease.solutions.map(solution => `<li>${solution}</li>`).join('')}
                </ul>
            </div>
        `;
        diseaseList.appendChild(diseaseDiv);
    });
}

function searchDiseases(diseases, query) {
    return diseases.filter(disease => disease.name.toLowerCase().includes(query.toLowerCase()));
}

document.addEventListener('DOMContentLoaded', async () => {
    const diseases = await fetchDiseases();
    // displayDiseases(diseases);

    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('search');
   
    let manual = document.querySelectorAll(".more")
    manual.forEach((val)=>{
        val.addEventListener("click",()=>{
         const query = val.value;
        const filteredDiseases = searchDiseases(diseases, query);
        displayDiseases(filteredDiseases);
        })
    })
    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        const filteredDiseases = searchDiseases(diseases, query);
        displayDiseases(filteredDiseases);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});