import client from '.';

export const GetTweetData = async () => {
    try {
        const response = await client.get(`/post`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const GetTweetDetailData = async (post_id) => {
    try {
        const response = await client.get(`/post/${post_id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

// 이건 사용자 기능 구현한 다음에 완성하기
// export const GetMyTweetData = async () => {
//     try {
//         const response = await client.get(`/post`);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// };

export const DeleteTweetData = async (post_id, account_id) => {
    try {
        const response = await client.delete(`/post${post_id}?accountId=${account_id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};