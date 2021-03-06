import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'


export const ServicesContainer = styled.div`
height: 700px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
@media screen and (max-width: 818px){
  height: 1100px;
}
@media screen and (max-width: 480px){
  height: 1300px;
}

`
export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width:1000px){
  grid-template-columns: 1fr 1fr;
  
}
@media screen and (max-width:818px){
  grid-template-columns: 1fr;
  padding: 0 20px;
}
`
export const ServicesCard = styled.div`
background:#fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);

transition: all 0.2s ease-in-out;
&:hover{
transform:scale(1.02);
transition: all 0.2s ease-in-out;
cursor: pointer;
}
`
export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`
export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;
@media screen and (max-width: 480px){
  font-size: 2rem;

}
`

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`
export const ServicesP = styled.p`
font-size: 1rem;
text-align:center;
`

export const HeroBtnWrapper = styled.div`

margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;

`
export const ArrowForward = styled(MdArrowForward)`

margin-left: 8px;
font-size: 20px;

`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`
export const Button = styled(LinkR)`

outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;
 box-shadow: 5px 8px 5px #070D0D;

&:hover{
transition: all 0.2s ease-in-out;
background:${({ primary }) => (primary ? '#fff' : '#01BF71')} ;
color:#000;

}
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
border-radius: 50px;
background:#08d37e ;

`