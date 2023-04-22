import axios from "axios";

const form = document.getElementById('story-form');
const promptInput = document.getElementById('prompt');
const storyContainer = document.getElementById('story-container');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const prompt = promptInput.value;
    generateStory(prompt);
});

async function generateStory(prompt) {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci/story', {
        prompt: prompt, 
        max_tokens: 1024,
        n: 1,
        stop: "\n\n"
    }, {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    });

    const story = response.data.choices[0].text.trim();
    storyContainer.textContent = story;
}