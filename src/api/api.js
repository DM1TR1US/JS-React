import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "94eb2a6a-00a2-4293-b587-fb573e69e03e"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 8) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    changeFollowData(userId, isFollowed) {
        return isFollowed ? instance.delete(`follow/${userId}`).then(r => r.data.resultCode)
            : instance.post(`follow/${userId}`).then(r => r.data.resultCode);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status });
    }
}


export const loginAPI = {
    isAuth() {
        return instance.get(`auth/me`)
            .then(response => response);
    },
    login(email, password, remember){
        return instance.post(`auth/login`, {email, password, remember})
    },
    logout(data){
        return instance.delete(`auth/login`)
    }
}

