import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate()
  return (
    <AppBar
      component="nav"
      sx={{
        background: "transparent",
        boxShadow: "none",
        width: "100%",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: "#5785E3",
            fontSize: "25px",
            paddingTop: "-5px",
          }}
        >
          <Button onClick={()=>navigate('/landingPage')}>TourismSpa</Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
