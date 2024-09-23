import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: max-content; 

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 123px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    margin-bottom: 12px;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > strong {
      display: flex;
      width: max-content; 
      font-size: 16px;
      line-height: 16px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
      height: 40px;
    }
`

export const Logout = styled.button`
  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  font-size: 14px;
  line-height: 16px;

  position: absolute;
  top: 55px;
  right: 195px;

  cursor: pointer;

`

