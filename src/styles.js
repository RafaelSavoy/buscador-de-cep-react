import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 1s ease;
  height: calc(100vh - 120px);
`