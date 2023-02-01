import axios from 'axios';

const apiUrl = 'https://api.openai.com/v1/completions';
var apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const generateText = async (prompt:string) => {
    try {
        const response = await axios.post(apiUrl, {
            prompt: prompt,
            model: "text-davinci-003",
            max_tokens: 250,
            temperature: 0.9,
            n:4
         }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default generateText;
