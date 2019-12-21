import React from 'react';
import './News.css';

const News = ({ news: newsData }) => {
  let news = <p>Нет новостей</p>
  if (newsData.length) {
    news = newsData.map((news, index) =>
      <div key={index}>
        <h2>{news.title}</h2>
        <p>{news.text}</p>
      </div>
    )
  }

  return (
    <div className="News">
      <h1>News Page</h1>
      <div className="newsBlock">{news}</div>
    </div>
  );
}

export default News;