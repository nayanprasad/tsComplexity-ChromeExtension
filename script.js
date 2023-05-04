console.log('hello world');

const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('form submitted');
    const code = document.querySelector('#code').value;
    const prompt = `return the time complexity value of below code ${code}`;

    const url = 'https://askgpt3.p.rapidapi.com/';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '2fa138ec46msh81f511674360ed2p11ff4cjsn5bfb059fc7bf',
            'X-RapidAPI-Host': 'askgpt3.p.rapidapi.com'
        },
        body: {
            prompt: prompt,
        }
    };


    const resultDiv = document.querySelector('#result');
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        resultDiv.innerHTML = result;

    } catch (error) {
        resultDiv.innerHTML = error;
    }

});