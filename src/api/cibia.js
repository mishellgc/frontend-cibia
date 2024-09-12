import OpenAI from "openai";
import axios from 'axios';

const cibia = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

const thread = await cibia.beta.threads.create();

export const fetchReply = (prompt) => {
    try {
        axios.post('http://127.0.0.1:5000/api/consult', {pregunta: prompt})
            .then(response => {console.log("entro");return response.data;})
            .catch(error => {console.error(error);});
        return '';
    } catch (error) {
        console.error('Error fetching reply: ', error);
        return ["Lo sentimos, no podemos contactar a cibia ahora"];
    }
}