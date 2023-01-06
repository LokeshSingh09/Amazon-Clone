import React from 'react'
import styled from 'styled-components'
import Rating from '@mui/material/Rating';

function Card({basket,setBasket,image,title,price,rating}){
    const addToBasket= () => {
        setBasket([...basket,{image,title,price,rating}])
      }
   
    return(
        <Container>
        <Image>
    <img src={image} alt=''/>
        </Image>
        <Description>
            <h5>{title}</h5>

        <div>₹{price}</div>
        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        <div>Efficient and eligible male escort able to handle 5 people at a time</div>
        <button onClick={addToBasket} >Add To Cart</button>
        
        
        </Description>
        </Container>
    )
}

const Container= styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction:column;
background-color: #fff;
z-index:10;


`;

const Image=styled.div`
width: 100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 20px;
flex: 0.3;
img{
    width:180px;
    height:200px;
}
`;
const Description= styled.div`
width: 90%;
margin: auto;
display:flex;
flex-direction: column;
justify-content: space-evenly;
flex:0.7;

h5{
    font-size: 16px;
    font-weight: 600;
}

div{
  font-weight: 600;  
}

button{
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border:none;
    border-radius: 10px;
    cursor:pointer;
}
`;

export default Card