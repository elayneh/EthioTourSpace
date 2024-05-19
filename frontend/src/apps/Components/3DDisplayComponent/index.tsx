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
  cursor: "pointer",
});

const ProductCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});


const Display3DComponent = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string,link: string) => {
    // Navigate to the details page with the id
    navigate(`/seeker/jobs/${id}`, { state: { link } });
  };

  return (
    <CardGrid>
      {gridData.map((item, index) => (
        <ProductCard key={item.id} onClick={() => handleCardClick(item.id, item.link)}>
          <CardMedia
            component="img"
            height="200"
            image={item.image}
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

