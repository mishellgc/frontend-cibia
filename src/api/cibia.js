import OpenAI from "openai";

const cibia = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

const thread = await cibia.beta.threads.create();

export const fetchReply = async (prompt) => {
    try {
        const message = await cibia.beta.threads.messages.create(
            thread.id,
            { role: "user", content: prompt }
        );

        let run = await cibia.beta.threads.runs.createAndPoll(
            thread.id,
            { assistant_id: process.env.REACT_APP_ASSISTANT_ID }
        );

        if (run.status === 'completed') {
            const messages = await cibia.beta.threads.messages.list(
                run.thread_id
            );
            return messages.data.reverse();
        } else {
            console.log(run.status);
        }
    } catch (error) {
        console.error('Error fetching reply: ', error);
        return ["Lo sentimos, no podemos contactar a cibia ahora"];
    }
}