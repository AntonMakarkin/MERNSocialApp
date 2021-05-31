import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

const posts = (posts = [], action) => {  //posts = state
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case FETCH_ALL:
            return action.payload; //our posts
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post); //action payload - new updated item
        case LIKE:  
            return posts.map((post) => post._id === action.payload._id ? action.payload : post); //action payload - new updated item
        default:
            return posts;
    }
} 

export default posts;