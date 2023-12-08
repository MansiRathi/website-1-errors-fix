function search() {
    // For now, let's just display an alert with the search query
    const searchQuery = document.querySelector('input').value;
    alert(`Search: ${searchQuery}`);
}

function submitComment() {
    // For now, let's just display an alert with the comment
    const comment = document.querySelector('textarea').value;
    alert(`Comment Submitted: ${comment}`);
}

// Placeholder videos
const asianVideos = [
    'https://www.youtube.com/embed/yfJ5PxP6Tt8',
    'https://www.youtube.com/embed/4XsGFEz1-rY',
    // Add more Asian Mukbang videos here
];

const fastFoodVideos = [
    'https://www.youtube.com/embed/QKRkM8BHZ6M',
    'https://www.youtube.com/embed/CxChK5Gwo3w',
    // Add more Fast Food Mukbang videos here
];

const dessertsVideos = [
    'https://www.youtube.com/embed/ox7GvIjskTc',
    'https://www.youtube.com/embed/gqPmUspHZsY',
    // Add more Desserts Mukbang videos here
];

function loadVideos(category, videos) {
    const videoContainer = document.querySelector(`#${category} .video-container`);

    // Display the first video
    videoContainer.innerHTML = `<iframe width="560" height="315" src="${videos[0]}" frameborder="0" allowfullscreen></iframe>`;

    // You can add logic to display more videos or create a video gallery
}

// Load placeholder videos
loadVideos('asian', asianVideos);
loadVideos('fastfood', fastFoodVideos);
loadVideos('desserts', dessertsVideos);
