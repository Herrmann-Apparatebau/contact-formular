import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

const StyledImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const StyledImage = styled.img`
  border: 1px solid black;
  border-radius: 5px;
`;

const StyledImageBox = styled.div`
  padding: 10px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
`;

const StyledH2 = styled.h2`
  margin: 10px;
`;

export default function Home() {
  const router = useRouter();
  return (
    <>
      <HeaderWrapper>
        <Image src="/logo.jpg" alt="logo" width={100} height={100}></Image>
        <StyledH2>Sprachauswahl</StyledH2>
        <StyledH2>Select your language</StyledH2>
      </HeaderWrapper>
      <StyledImageWrapper>
        <StyledImageBox>
          <StyledImage
            src="/flags/DE.png"
            alt="DE"
            width={80}
            height={80}
            onClick={() => router.push("/de")}
          ></StyledImage>
        </StyledImageBox>
        <StyledImageBox>
          <StyledImage
            src="/flags/EN.png"
            alt="EN"
            width={80}
            height={80}
            onClick={() => router.push("/en")}
          ></StyledImage>
        </StyledImageBox>
      </StyledImageWrapper>
    </>
  );
}
