import styled from "styled-components";

export const Main = styled.main``

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const topSide = styled.div`
    background-image: ${props => props.theme.theme === 'dark' ? 'url("/background/bg-desktop-dark.jpg")' : 'url("/background/bg-desktop-light.jpg")'};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 42vh;
`