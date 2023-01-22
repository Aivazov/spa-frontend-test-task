import axios from 'axios';
// import React from 'react';

axios.defaults.headers.common['Authorization'] =
  'Bearer 48e54ca0458d4c07a6db808cddd7a419';

let articles = [];
let result = null;
console.log('articles before init', articles);
// const array = [
//   {
//     author: '1',
//     content:
//       'After two consecutive failed attempts to re-establish contact, NASA on Wednesday officially called an end to its InSight Mars mission. On December 15th, the lander made its final transmission to Eart… [+2274 chars]',
//     description:
//       'After two consecutive failed attempts to re-establish contact, NASA on Wednesday officially called an end to its InSight Mars mission. On December 15th, the lander made its final transmission to Earth. NASA said it would make the tough decision to call the mi…',
//     publishedAt: '2022-12-21T19:02:45Z',
//     title: 'NASA officially retires its InSight Mars lander',
//     url: 'https://www.engadget.com/nasa-officially-retires-its-in-sight-mars-lander-190245298.html',
//   },
//   {
//     author: '2',
//     content:
//       'Walter Cunningham, an astronaut who was the last surviving member of the 1968 Apollo 7 mission, died on Tuesday at 90. The Iowa-born Cunningham served in the US Navy and Marine Corps before joining N… [+2246 chars]',
//     description:
//       'Walter Cunningham, an astronaut who was the last surviving member of the 1968 Apollo 7 mission, died on Tuesday at 90. The Iowa-born Cunningham served in the US Navy and Marine Corps before joining NASA in 1963 and eventually taking part in the Apollo program…',
//     publishedAt: '2022-12-21T19:02:45Z',
//     title: 'NASA officially retires its InSight Mars lander',
//     url: '"https://www.engadget.com/nasa-apollo-7-astronaut-walter-cunningham-obituary-171522792.html"',
//   },
//   {
//     author: '3',
//     content:
//       "NASA is still willing to fund unusual concepts in its bid to advance space exploration. The agency is handing out $175,000 initial study grants to 14 projects that could be useful for missions in and… [+1844 chars]",
//     description:
//       'Last year was one of the warmest measured, say NASA and NOAA. It would have been even more sweltering if not for La Niña, which will soon fade away.',
//     publishedAt: '2022-12-21T19:02:45Z',
//     title: 'NASA officially retires its InSight Mars lander',
//     url: '"https://www.engadget.com/nasa-apollo-7-astronaut-walter-cunningham-obituary-171522792.html"',
//   },
// ];

export const fetchArticlesAPI = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 6,
}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((res) => {
      // console.log(res);
      articles = res.data.articles;
      console.log('articles after init:', articles);

      return res.data.articles;
    });
};

export const getArticleByUrl = (articletUrl) => {
  console.log('articles find', articles);
  if (articles) {
    result = articles.find((article) => article.url === articletUrl);
    return result;
  }
  // let result = articles.find((article) => article.url === articletUrl);
  console.log('result', result);
  // return result;
  // console.log('articles is:', articles);
  // console.log('articles is:', articles);
};
