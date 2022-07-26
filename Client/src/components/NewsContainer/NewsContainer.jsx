import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NewsCard } from '../NewsCard/NewsCard';
import './NewsContainer.css'


export const NewsContainer = () => {

    const [allnews, setAllnews] = useState([]);
    const [main, setMain] = useState({})


    useEffect(() => {
        axios.get("https://api.currentsapi.services/v1/latest-news?language=en&apiKey=IJt6TvU_ZHI05_joE0kUd5lXou_KXO6g0TY25_iTXCaO1Evf")
            .then(({ data }) => {
                setAllnews([...data.news]);
                setMain(data.news[3])
            
                console.log("news",data.news);
            });
    }, []);

    const Container = styled.div`
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(4,23%);
    `

    const{image,title,category}=main

    return (
      <div className="news">
        <div className="hero-news-card">
          <h1 className="breaking">Breaking News</h1>

          <h1>{title}</h1>
          <div className="hero-image-div">
            <img
              src={
                image
                  ? image
                  : "https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg"
              }
              alt=""
            />
          </div>
          {/* 
          <p>{category[0]}</p> */}
        </div>

     
          {" "}
          <h3 className="news-heading">TOP STORIES</h3>
        

        <Container>
          {[
            ...allnews.filter(({ image }) => {
              return image !== "None";
            }),
          ].map((ele) => {
            return (
              <Link
                to={`/entry/${ele.id}`}
                state={{ data: { ele } }}
                key={ele.id}
              >
                <NewsCard data={ele} />
              </Link>
            );
          })}
        </Container>
      </div>
    );
}