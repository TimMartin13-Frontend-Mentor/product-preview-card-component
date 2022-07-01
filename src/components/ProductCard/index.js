import React from "react";
import { Card, Image, ProductContainer, Title, Name, Description, PriceContainer, CurrentPrice, OriginalPrice, Button, Icon } from './styles'; 

const ProductCard = () => {
  return (
    <Card>
      <Image src={ process.env.PUBLIC_URL + "/images/image-product-mobile.jpg"} alt="Perfume bottle" />
      <ProductContainer>
        <Title>Perfume</Title>
        <Name>Gabrielle Essence Eau De Parfum</Name>
        <Description>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</Description>
        <PriceContainer>
          <CurrentPrice>$149.99</CurrentPrice>
          <OriginalPrice>$169.99</OriginalPrice>
        </PriceContainer>
        <Button><Icon src={ process.env.PUBLIC_URL + "/images/icon-cart.svg"} alt="Cart" />Add to Cart</Button>
      </ProductContainer>
    </Card>
  )
}

export default ProductCard;