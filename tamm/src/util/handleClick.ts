import { useNavigate } from "react-router-dom";

export const handleButtonClick = () => {
  const navigate = useNavigate();
  navigate("/client-form");
};
