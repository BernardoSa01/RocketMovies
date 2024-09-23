import styled from "styled-components";

export const Container = styled.div`
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;
  border-radius: 16px;
  padding: 32px;

  h1 {
    flex: 1;
    text-align: left;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 6px;
    margin-bottom: 20px;

    svg {
      width: 12px;
      height: 12px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  p {
    text-align: justify;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  footer {
    width: 100%;
    display: flex;
    margin-top: 25px;
  }
`