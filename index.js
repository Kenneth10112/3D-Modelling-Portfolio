document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('mainContent');

    function renderPortfolio(data) {
        // We start with an empty string to overwrite the "placeholder" HTML
        let html = '';

        data.forEach(work => {
            // Logic to choose between video or image
            let mediaHtml = '';
            
            if (work.type === 'mp4') {
                mediaHtml = `
                    <video autoplay loop muted playsinline>
                        <source src="${work.image}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
            } else {
                mediaHtml = `<img src="${work.image}" alt="${work.title}">`;
            }

            // Creating the item structure
            html += `
                <div class="itemContainer">
                    <div class="imgContainer">
                        ${mediaHtml}
                    </div>
                    <h3>${work.title}</h3>
                    <p>${work.description}</p>
                </div>`;
        });

        mainContent.innerHTML = html;
    }

    // Check if 'works' exists (from data.js) before running
    if (typeof works !== 'undefined') {
        renderPortfolio(works);
    } else {
        console.error("The 'works' array was not found. Check data.js!");
    }
});