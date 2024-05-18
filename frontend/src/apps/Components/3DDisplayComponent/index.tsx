import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { gridData } from "./constants";

const CardGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "16px",
  padding: "16px",
});

const ProductCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer", // Add cursor pointer to show that card is clickable
});

const ProductCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const BASE_URI = "https://source.unsplash.com/random?sig=";

const Display3DComponent = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    // Update the URL without reloading the page
    navigate(`/seeker/jobs/${id}`, { replace: true });

    // Redirect to external URL
    setTimeout(() => {
      window.location.href = `https://3dwarehouse.sketchup.com/ar-view/9aa593efbeef687116d3007eb7e4386f`;
    }, 0);
  };

  return (
    <CardGrid>
      {gridData.map((item, index) => (
        <ProductCard key={item.id} onClick={() => handleCardClick(item.id)}>
          <CardMedia
            component="img"
            height="200"
            image={BASE_URI + index}
            alt={item.title}
          />
          <ProductCardContent>
            <Typography variant="h6" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description || "Description of the product."}
            </Typography>
          </ProductCardContent>
        </ProductCard>
      ))}
    </CardGrid>
  );
};

export default Display3DComponent;
