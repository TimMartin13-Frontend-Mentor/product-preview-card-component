import React from "react";
import {
  Card,
  MobileImage,
  DesktopImage,
  ProductContainer,
  Title,
  Name,
  Description,
  PriceContainer,
  CurrentPrice,
  OriginalPrice,
  Button,
  Icon,
  Wrapper,
} from "./styles";
import Attribution from "../Attribution";

const ProductCard = () => {
  return (
    <Wrapper>
      <Card>
        <MobileImage
          src={process.env.PUBLIC_URL + "/images/image-product-mobile.jpg"}
          alt="Perfume bottle"
        />
        <DesktopImage
          src={process.env.PUBLIC_URL + "/images/image-product-desktop.jpg"}
          alt="Perfume bottle"
        />
        <ProductContainer>
          <Title>Perfume</Title>
          <Name>Gabrielle Essence Eau De Parfum</Name>
          <Description>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </Description>
          <PriceContainer>
            <CurrentPrice>$149.99</CurrentPrice>
            <OriginalPrice>$169.99</OriginalPrice>
          </PriceContainer>
          <Button>
            <Icon
              src={process.env.PUBLIC_URL + "/images/icon-cart.svg"}
              alt="Cart"
            />
            Add to Cart
          </Button>
        </ProductContainer>
      </Card>
      <Attribution />
    </Wrapper>
  );
};

export default ProductCard;
