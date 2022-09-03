import { ButtonBox } from "@/styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigateTo = useNavigate();
  return (
    <>
      <h1>Countries info</h1>
      <ButtonBox onClick={() => navigateTo("countries")}>
        Let's take a look
      </ButtonBox>
    </>
  );
};

export default Home;
