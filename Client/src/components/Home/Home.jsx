import { NewsContainer } from '../NewsContainer/NewsContainer';
import { SideNews } from '../SideNews/SideNews';
import { LifeContent } from '../LifeContent/LifeContent';
import axios from 'axios';
import { useEffect } from 'react';
import {NewsCard} from '../NewsCard/NewsCard'


export const Home = () => {

    useEffect(()=>{
        document.title = "HuffPost - Breaking News, U.S. and World News | HuffPost";
    },[])


    // https://gnews.io/api/v4/top-headlines?token=API-Token
    // gnews api: 3945cb1d1e3e3b062da1a69709c2354c
    // currect api token = IJt6TvU_ZHI05_joE0kUd5lXou_KXO6g0TY25_iTXCaO1Evf
    // 31d2737533b64b4f8708946a39b6076b
    // GET https://newsapi.org/v2/top-headlines?country=us&apiKey=31d2737533b64b4f8708946a39b6076b

    

    const getData = ()=>{
        axios.get("https://api.currentsapi.services/v1/latest-news?language=en&apiKey=IJt6TvU_ZHI05_joE0kUd5lXou_KXO6g0TY25_iTXCaO1Evf")
        .then(({data}) => {
            localStorage.setItem("news-articles", JSON.stringify(data.news));
        }).catch((err) => {
            console.log(err);
        });
    }

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
}