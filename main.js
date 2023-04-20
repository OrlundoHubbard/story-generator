const form = document.getElementById('story-form');
const promptInput = document.getElementById('prompt');
const storyContainer = document.getElementById('story-container');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const prompt = promptInput.value;
    generateStory(prompt);
});

async function generateStory(prompt) {
    
}