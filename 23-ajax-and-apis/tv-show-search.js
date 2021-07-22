const form = document.querySelector('#searchForm')
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const response = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(response.data)
    form.elements.query.value = '';
})

const makeImages = shows => {
    for (let result of shows) {
        if (result.show.image) {
            const imageContainer = document.querySelector('#imageContainer');
            const image = document.createElement('img');
            image.src = result.show.image.medium;
            imageContainer.append(image);
        }
    }
}