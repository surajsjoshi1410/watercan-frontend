import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 80px;
    background-color: rgb(247, 245, 245);
    color: #1d1d1d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 0 20px;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    margin-left: 40px;
    @media screen and (max-width: 480px) {
        margin-left: 0px;
    }
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 80px;
    background-color: rgb(247, 245, 245);
    color: #1d1d1d;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    padding-right: 5px;
    
font-family: "Montserrat", sans-serif;
`;

export const HeaderTitle = styled.h1`
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
font-size: 24px;
font-weight: bold;
margin-right:200px;
font-family: "Montserrat", sans-serif;
`;



export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
`;

export const ProfileIcon = styled.div`
    margin-left: 10px;
    font-size: 24px;
    color: #333;
    cursor: pointer;
`;

export const DropdownMenu = styled.div`
    position: absolute;
    right: 0;
    top: 40px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    padding: 5px 0;
    z-index: 10;

    button {
        background: none;
        border: none;
        padding: 10px 20px;
        width: 100%;
        text-align: left;
        cursor: pointer;
        font-size: 14px;

        &:hover {
            background: #f0f0f0;
        }
    }
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 100%;
  max-width: 450px;
  background-color: #ffffff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  z-index: 999;
  overflow-y: auto;
`;

export const Overlay = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;
