import axios from "axios";
import { useEffect, useState } from "react"

import "../SideNews/Sidenews.css"



export const SideNews = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
          .get(
            "https://api.currentsapi.services/v1/search?keywords=ukraine&language=en&page_size=10&apiKey=IJt6TvU_ZHI05_joE0kUd5lXou_KXO6g0TY25_iTXCaO1Evf"
          )
          .then(({ data }) => {
            setNews([...data.news]);
            console.log("side",data.news)
          })
          .catch((err) => {
            console.log(err);
          });
    }, [])

    return (
      <div className="side-news">
        <h4 className="news-heading">UKRAINE CRISIS</h4>

        <div className="side-news_inner-div">
          {news.map((ele) => {
            return <h3 className="innercomponent" key={String(Math.random() * 10)}>{ele.title}</h3>
          })}
        </div>
      </div>
    );
}