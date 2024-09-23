import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .myMovies {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-inline: auto;
    padding-top: 50px;
    padding-left: 123px;
    padding-right: 106px;
    margin-bottom: 40px;

    h1 {
      font-size: 32px;
      font-weight: 400;
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      background: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      display: flex;
      align-items: center;
      gap: 8px;

      border: none;
      border-radius: 8px;

      padding: 13.5px 32px;

      margin-right: 17px;
    }
  }

  .movieTags {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;

    overflow-y: auto;

    padding-inline: 123px;
    margin-bottom: 60px;
    
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
