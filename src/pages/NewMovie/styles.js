import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main {
    width: 100%;
    max-width: 1298px;
    /*height: 783px;*/

    text-align: justify;
    margin: 40px 106px 85px 123px;

  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    background-color: ${({ theme }) => theme.COLORS.BLACK_500};
    border-radius: 8px;
    margin-top: 24px;
    gap: 24px;
    padding: 16px;
  }
`

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  gap: 40px;

  header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: flex-start;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 16px;
      display: flex;
      align-items: center;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 16px;
      margin-right: 8px;
      margin-top: 3px;
    }

    h1 {
      font-size: 36px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }

  footer {
    display: flex;
    flex-direction: row;
    gap: 40px;

    .deleteMovie {
      background-color: ${({ theme }) => theme.COLORS.BLACK_500};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`

export const CustomInput = styled.input`
  width: 100%;
  max-width: 100%;
  /*width: 1000px;*/
  height: 56px;
  padding: 18px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 10px;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200}
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 220px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 40px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

`

