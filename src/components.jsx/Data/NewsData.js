import React, { createContext } from "react";
import axios from "axios"
// import NewsData from "NewsData"

const NewsData = createContext()

const NewsDataProvider = (props) => {

  const [data, setData] = useState([])

  const apiKey = "8ff24b2dd0b0451ca41724d1d5b67d48";

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=8ff24b2dd0b0451ca41724d1d5b67d48`).then((response)) => setData(response.data()))
    .catch((error)) => console.log(error));
   
  }, []);

  return(
    <NewsDataProvider props={}>
    {props.children}
    </NewsDataProvider>
  );

};



// function NewsData () {

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('8ff24b2dd0b0451ca41724d1d5b67d48');
// To query /v2/top-headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
//   category: 'business',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
// }
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
// });
// To query /v2/everything
// You must include at least one q, source, or domain
// newsapi.v2.everything({
//   q: 'bitcoin',
//   sources: 'bbc-news,the-verge',
//   domains: 'bbc.co.uk, techcrunch.com',
//   from: '2017-12-01',
//   to: '2017-12-12',
//   language: 'en',
//   sortBy: 'relevancy',
//   page: 2
// }).then(response => {
//   console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
// });
// To query sources
// All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
// });
// }









// GET https://newsapi.org/v2/sources?country=usapiKey=API_KEY



// {
//     "status": "ok",
//     -"sources": [
//     -{
//     "id": "abc-news",
//     "name": "ABC News",
//     "description": "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
//     "url": "https://abcnews.go.com",
//     "category": "general",
//     "language": "en",
//     "country": "us"
//     },

    // export default NewsData;
