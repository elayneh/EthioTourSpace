import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { gridData } from "./constants";
import { useState } from "react";
import PromptModal from "./Modal";

const FloatingButton = styled(Button)({
  position: "fixed",
  top: "50%",
  right: "16px",
  transform: "translateY(-50%)",
  padding: "20px",
  color: "white",
  backgroundColor: "#84a2f1",
  borderRadius: "10px",
  zIndex: 9999,
  transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-50%) scale(1.1)",
    backgroundColor: "#6b8ed6",
  },
});
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCardClick = (id: string) => {
    // Update the URL without reloading the page
    navigate(`/seeker/jobs/${id}`, { replace: true });

    // Redirect to external URL
    setTimeout(() => {
      window.location.href = `https://sketchfab.com/3d-models/beta-giorgis-textured-lalibela-ethiopia-bbd290c2a74e46af9f0671573251034d`;
    }, 0);
  };

  return (
    <>
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
      {isModalOpen ? (
        <PromptModal closeModal={() => setIsModalOpen(false)} />
      ) : (
        <FloatingButton onClick={handleOpenModal}>OpenAI</FloatingButton>
      )}
    </>
  );
};

export default Display3DComponent;
