import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  background-color: ${({ theme }) => theme.COLORS.BLACK_400};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  padding: 8px 16px;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
`