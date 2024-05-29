import client from '.';

export const SendTweet = async (request) => {
    try {
        const response = await client.post('/post', request);

        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
