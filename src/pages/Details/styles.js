import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 106px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    padding: 40px 123px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-button {
      height: 130px;
    }

    &::-webkit-scrollbar-thumb {
      border-inline: 10px solid ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
      background-clip: padding-box;
    }
  }
`

export const Content = styled.div`
  > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      margin-bottom: 24px;
      cursor: pointer;
    }

  > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 19px;

    h1 {
      font-size: 36px;
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    ul {
      display: flex;
      list-style: none;
      gap: 10px;
      margin-top: 5px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 20px;
      cursor: pointer;
    }

    
  }

    > p {
      text-align: justify;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    p:first-of-type {
      margin-top: 40px;
    }
`

export const Author = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  margin-bottom: 40px;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-left: 15px;
  }
`




