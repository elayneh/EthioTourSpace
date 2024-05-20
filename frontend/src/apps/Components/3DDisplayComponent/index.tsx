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
  cursor: "pointer",
  position: "relative",
});

const ProductCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const TransparentButton = styled(Button)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  "&:focus": {
    outline: "none",
    border: "none",
  },
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  "&:active": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});

const Display3DComponent = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCardClick = (id: string, link: string) => {
    navigate(`/display/models/${id}`, { state: { link } });
  };

  return (
    <>
      <CardGrid>
        {gridData.map((item, _index) => (
          <ProductCard key={item.id}>
            <CardMedia component="img" height="200" image={item.image} alt={item.title} />
            <TransparentButton onClick={() => handleCardClick(item.id, item.link)} />
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

