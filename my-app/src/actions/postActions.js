import { REPORT_ERRORS, FETCH_POSTS, CLEAR_ERRORS } from "./types";
import axios from "axios";

//another way to write it
/* export function fetchPosts() {
  return function (dispatch) {
    fetch("http://127.0.0.1:8000/api/shop/")
      .then((res) => res.json())
      .then((posts) =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts,
        })
      );
  };
} */

export const fetchPosts = () => (dispatch) => {
  axios.get("http://127.0.0.1:8000/api/shop/").then((res) => {
    console.log(res.data);
    dispatch({
      type: FETCH_POSTS,
      payload: res.data,
    });
  });
};

export const newPost = (user) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/shop/", {
      title: user.title,
      description: user.description,
      price: user.price,
    })
    .then((res) => {
      console.log(res);
      dispatch(fetchPosts());
    })
    .catch((error) => {
      console.log(error.response.data.errors);
      dispatch({
        type: REPORT_ERRORS,
        payload: error.response.data.errors,
      });
    });
};

export const deletePost = (id) => (dispatch) => {
  axios.delete("http://127.0.0.1:8000/api/shop/" + id).then((res) => {
    console.log(res);
    dispatch(fetchPosts());
  });
};

export const updatePost = (user, id) => (dispatch) => {
  axios
    .put("http://127.0.0.1:8000/api/shop/" + id, {
      title: user.title,
      description: user.description,
      price: user.price,
    })
    .then((res) => {
      console.log(res);
      dispatch(fetchPosts());
    })
    .catch((error) => {
      console.log(error.response.data.errors);
      dispatch({
        type: REPORT_ERRORS,
        payload: error.response.data.errors,
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
