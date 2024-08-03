async function generateImage() {
    const text = document.getElementById('text-input').value;
    const apiKey = '5JC7c--QHq2nWJ_CEIKd3EJYd_hOzeFwUitB4z646o4';
    const url = `https://api.unsplash.com/search/photos?query=${text}&client_id=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            const imgSrc = data.results[0].urls.regular;
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = text;
            img.style.width = '100%';
            img.style.borderRadius = '10px';

            const imageContainer = document.getElementById('image-container');
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        } else {
            alert('No images found.');
        }
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}
