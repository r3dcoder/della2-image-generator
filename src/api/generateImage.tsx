import axios from 'axios';

const apiUrl = 'https://api.openai.com/v1/images/generations';
var apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const generateImage = async (prompt:string, n:Number, size:string) => {
    try {
        const response = await axios.post(apiUrl, {
            prompt: prompt,
            n: n,
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

export default generateImage;
