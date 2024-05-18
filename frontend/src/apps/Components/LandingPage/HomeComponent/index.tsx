import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeComponent = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {/* <TextContainer>
        <div>"Some Expressive thing is here."</div>
      </TextContainer> */}
      <ImageContainer>
        <img
          src={
            "https://images.pexels.com/photos/16058900/pexels-photo-16058900/free-photo-of-sagrada-familia.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt="Car"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </ImageContainer>

      <FloatingButton onClick={() => navigate("signIn")}>
        Go to Login
      </FloatingButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  width: 100vw;
`;
const FloatingButton = styled.button`
  position: fixed;
  top: 340px;
  right: 10px;
  padding: 10px 20px;
  background-color: #5785E3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 460px) {
    top: 240px;
  }
`;
export default HomeComponent;
