import api from '../../services/api';
import { load, stop } from '../ducks/load';
import { addTweets, addTweet } from '../ducks/tweet';
import { login } from '../ducks/auth';
import catcherror from '../../util/catcherror';

var header = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('tuite-token')}`,
        
    }
};

export const authLogin = (user) =>{

    return dispatch => {
        dispatch(load());
        api.post('/auth/authenticate', user)
        .then(res=>{
            localStorage.setItem('tuite-token',res.data.token);
            localStorage.setItem('tuite-userid',res.data.user._id);
            localStorage.setItem('tuite-username',res.data.user.username);
            localStorage.setItem('tuite-picture',res.data.user.picture_url);
            localStorage.setItem('tuite-folder',res.data.user.folder_url);
            dispatch(login(res.data));
            window.location.pathname = '/';
        })
        .catch((err)=>{
            dispatch(stop());
            catcherror(err);
        });
    }
}

export const authLogout = () =>{
    window.location.pathname = '/login';
    localStorage.clear();
}

export const loadTweets = (page) =>{
    return dispatch =>{
        api.get(`/tweet?page=${page}&author_id=${localStorage.getItem('tuite-userid')}`,header)
        .then(res =>{
            dispatch(addTweets(res.data))
        })
    }
}

export const createTweet = (content) =>{
    const data = {
        author_id: localStorage.getItem('tuite-userid'),
        author_name: localStorage.getItem('tuite-username'),
        content
    }
    return dispatch =>{
        api.post(`/tweet`,data,header)
        .then(res =>{
            dispatch(addTweet(res.data))
    
            api.get(`/tweet?page=${1}&author_id=${localStorage.getItem('tuite-userid')}`,header)
            .then(res =>{
                dispatch(addTweets(res.data))
            })
        })
    }
}


export const updateProfile = (data) =>{
    return dispatch => {
        dispatch(load())
        api.put(`/user/${localStorage.getItem('tuite-userid')}`,data,{
            headers:{
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('tuite-token')}`,
            },
        }).then(res =>{
            localStorage.setItem('tuite-picture',res.data.user.picture_url);
            localStorage.setItem('tuite-folder',res.data.user.folder_url);
            window.location.pathname = '/';
            dispatch(stop())
        }).catch(err =>{
            dispatch(stop())
            catcherror(err);

        })
    }
}

export const register = (user) =>{
    return dispatch => {
        dispatch(load());
        api.post('/auth/register', user)
        .then(res=>{
            localStorage.setItem('tuite-token',res.data.token);
            localStorage.setItem('tuite-userid',res.data.user._id);
            localStorage.setItem('tuite-username',res.data.user.username);
            localStorage.setItem('tuite-picture',res.data.user.picture_url);
            localStorage.setItem('tuite-folder',res.data.user.folder_url);
            dispatch(login(res.data));
            window.location.pathname = '/';
        })
        .catch((err)=>{
            dispatch(stop());
            catcherror(err);
        });
    }
}
    


