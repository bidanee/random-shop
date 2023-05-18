import styled from "styled-components";

const Footer = () => {
  return (
    <footer>
      <Foot>
        <p>Copyright © 2023.05.18 -by bidanee</p>
      </Foot>
    </footer>
  );
};
const Foot = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: 1.2rem;
`;
export default Footer;
