import { Blog } from "./Blog/Blog";
import { Card } from "./Card/Card";
import { Top } from "./Top/Top";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Life.css";
export const Life = () => {
  const [blog, setBlog] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);
  function getAllData() {
    axios.get("https://huffpost-clone.herokuapp.com/blog").then(({ data }) => {
      setBlog(data);
    });
    axios.get("https://huffpost-clone.herokuapp.com/card").then(({ data }) => {
      setCard(data);
    });
  }
  return (
    <>    
      <div className="life-card">
        <Top />
        <div className="cards-div">
          {card.map((e) => (
            <Card
              key={e.id}
              imageUrl={e.imageUrl}
              title={e.title}
              heading={e.heading}
              text={e.text}
            />
          ))}
        </div>
        {blog.map((e) => (
          <Blog
            key={e.id}
            t_img={e.t_img}
            title={e.title}
            l_img={e.l_img}
            l_head={e.l_head}
            m_img={e.m_img}
            m_head={e.m_head}
            r_img={e.r_img}
            r_head={e.r_head}
          />
        ))}
      </div>
    </>
  );
};
