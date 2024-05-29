import client from ".";

// 회원가입
export const postRegister = async (email, password, nickname) => {
    try {
        const response = await client.post("/account", {
            email,
            password,
            nickname,
        });
        console.log(response);
        return response;
    } catch (err) {
        console.log("회원가입 실패", err);
        return err;
    }
};

// 로그인
export const postLogin = async (email, password) => {
    try {
        const response = await client.post("/account/login", {
            email,
            password,
        });
        console.log(response);
        const token = response.data.accessToken;
        localStorage.setItem("efubtoken", token);
        return response;
    } catch (err) {
        console.log("로그인 실패", err);
        return err;
    }
};


// 사용자 정보 가져오기
export const getAccountInfo = async (account_id) => {
    try {
        const response = await client.get(`/account/${account_id}`);
        return response.data;
    } catch (error) {
        console.error("사용자 정보 get 실패", error);
        throw error;
    }
};

// 사용자가 작성한 트윗 가져오기
export const getAccountTweets = async (account_id) => {
    try {
        const response = await client.get(`/account/${account_id}/tweets`);
        return response.data;
    } catch (error) {
        console.error("사용자 작성 트윗 get 실패", error);
        throw error;
    }
};
