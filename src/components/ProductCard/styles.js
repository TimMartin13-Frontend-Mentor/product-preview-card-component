import styled from 'styled-components';
// import mobileBg from './../../assets/image-product-mobile.jpg';
// import mobileBg from './../assets/image-product-mobile.jpg';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.75rem 1rem;
  background-color: ${props => props.theme.white};
  border-radius: 0.6rem;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.6rem 0.6rem 0 0; 
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.8rem 1.5rem 1.5rem;
`

export const Title = styled.p`
  color: ${props => props.theme.veryDarkBlue};
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.3rem;
`

export const Name = styled.h1`
  color: ${props => props.theme.veryDarkBlue};
  font-size: 1.9rem;
  font-family: 'Fraunces', sans-serif;
  margin: 0.2rem 0;
  line-height: 1.9rem;
  `
  
export const Description = styled.p`
  color: ${props => props.theme.darkGrayishBlue};
  font-size: 0.8rem;
  line-height: 1.4rem;
`
  
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.9rem 0 1rem 0;
`

export const CurrentPrice = styled.h2`
  color: ${props => props.theme.darkCyan};
  font-family: 'Fraunces', sans-serif;
  font-size: 2rem;
  padding-right: 1.5rem;
  margin: 0;
`
  
export const OriginalPrice = styled.h3`
  color: ${props => props.theme.darkGrayishBlue};
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: line-through;
`
  
export const Button = styled.button`
  background-color: ${props => props.theme.darkCyan};
  color: ${props => props.theme.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 0.6rem;
  border-style: none;
  padding: 1rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img`
  width: 1rem;
  padding-right: 0.8rem;
`
