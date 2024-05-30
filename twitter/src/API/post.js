import client from '.';

export const SendTweet = async (request) => {
    try {
        const response = await client.post('/post', request);
        console.log('Response from server:', response); // 디버깅용 로그
        return response;
    } catch (error) {
        console.error('Error sending tweet:', error);
        return { status: error.response ? error.response.status : 500, data: error.message };
    }
};
