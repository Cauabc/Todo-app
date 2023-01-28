import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 5rem;
    width: 40vw;
    height: 80vh;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    h1{
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 12px;
        font-size: 3rem;
    }

    img{
        width: 2rem;
        height: 2rem;
    }
    margin-bottom: 2rem;

`

export const InputArea = styled.div`
    width: 100%;
    height: 4rem;
    background-color: ${props => props.theme.container};
    border-radius: 4px;
`

