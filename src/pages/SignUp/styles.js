import styled from "styled-components";
import backgroundImg from "../../assets/movie.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  > h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 40px;
    margin-bottom: 40px;
  }

  > .backToLogin {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    margin: 25px auto 8px;

    svg {
      margin-top: 3px;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`