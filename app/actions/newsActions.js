import axios from 'axios';
import dispatcher from '../dispatcher/newsDispatcher';

const NewsActions = {
   /**
   * gets the news sources from the API
   * @returns {promise}
   */
  displaySource() {
    const sourceURL = 'https://newsapi.org/v1/sources?language=en';
    return axios.get(sourceURL).then((res) => {
      dispatcher.dispatch({
        type: 'DISPLAY_NEWS',
        news: res.data.sources,
      });
    });
  },
  /**
   * gets the news articles from the API
   * @returns {promise}
   */
  getNews(newsSite, sort) {
    const API = process.env.API_KEY;
    const requestURL = `https://newsapi.org/v1/articles?source=${newsSite}&sortBy=${sort}&apiKey=${API}`;
    return axios.get(requestURL).then((res) => {
      dispatcher.dispatch({
        type: 'GET_NEWS',
        news: res.data,
      });
    });
  },
};
module.exports = NewsActions;
