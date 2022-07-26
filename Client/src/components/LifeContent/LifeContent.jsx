import './LifeContent.css'
import axios from "axios";
import { useEffect, useState } from "react"
import styled from "styled-components";

const StyledDiv = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(2, 48%);

`

export const LifeContent = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get("https://huffpost-clone.herokuapp.com/life")
          .then(({ data }) => {
            setData([...data]);
          })
          .catch((err) => {
            console.log(err);
          });
    }, [])


    return <div className="life-div news">

        <h1>LIFE</h1>

        <StyledDiv>
            {
                data.map((ele) => {
                    return <div key={ele.id} className="life-content-card">
                        <img src={ele.image} alt="" />
                        <div>
                            <h5 className='  '>{ele.label}</h5>
                            <h2>{ele.headline}</h2>
                            <p>{ele.description}</p>
                        </div>
                    </div>
                })
            }
        </StyledDiv>

    </div>
}