import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 17%;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_600};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${ theme.COLORS.GRAY_200 }` : "none"};

  border-radius: 10px; 
  padding: 16px;


  > button {
    border: none;
    background: none; 

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 25px; 
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200}
    }
  }
`