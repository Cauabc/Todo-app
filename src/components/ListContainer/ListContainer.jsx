import { useState } from 'react'
import * as S from './styles'


export const ListContainer = ({toggleTheme}) => {

    const [icon, setIcon] = useState("/icons/icon-sun.svg")

    const changeTheme = () => {
        icon === "/icons/icon-sun.svg" ? setIcon("/icons/icon-moon.svg") : setIcon("/icons/icon-sun.svg")
        return toggleTheme()
    }

    return(
        <S.Container>
            <S.Header>
                <h1>todo</h1>
                <img src={icon} onClick={changeTheme} alt="Click here to change theme" />
            </S.Header>
            <S.InputArea>
                <input type="text" name="task" id="task" placeholder="Create a new todo..." />
            </S.InputArea>
        </S.Container>
    )
}