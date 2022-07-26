import {NewsContainer} from '../NewsContainer/NewsContainer';
import {SideNews} from '../SideNews/SideNews';
import {LifeContent} from '../LifeContent/LifeContent';
import axios from 'axios';
import {useEffect} from 'react';


export const Home = () => {
  useEffect(() => {
    document.title = 'HuffPost - Breaking News, U.S. and World News | HuffPost';
  }, []);

  const getData = () => {
    axios
      .get(
        'https://api.currentsapi.services/v1/latest-news?language=en&apiKey=IJt6TvU_ZHI05_joE0kUd5lXou_KXO6g0TY25_iTXCaO1Evf'
      )
      .then(({data}) => {
        localStorage.setItem('news-articles', JSON.stringify(data.news));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home-container">
      <div className="main-div">
        <NewsContainer />
        <SideNews />
      </div>

      <div className="main-div">
        <LifeContent />
        <SideNews />
      </div>
    </div>
  );
};
