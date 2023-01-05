import { HeaderContainer } from "./Header.module";
import  logo  from '../assets/Logo.png'


export function Header(){
  return(
    <HeaderContainer>
      <img src={logo} alt=""/>
    </HeaderContainer>
  )
}
