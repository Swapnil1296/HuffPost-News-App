import styled from 'styled-components'
import './ProfilePage.css'

export const Button = styled.button`
background-color: #444444;
border: unset;
color: white;
border-radius: 25px;
padding: 12px 20px;
font-weight: 600;
width: ${({ width }) => {return width }};

&:hover{
    background-color: #0dbe98;
    color: black;
    cursor: pointer;
}

`

// export const Button = ({ children }) => {
//     return <MyButton >{children}</MyButton>
// }