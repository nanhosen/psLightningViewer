import styled, { css } from "styled-components";
import { Link } from 'react-router-dom' 
import React, { useRef, useState } from "react";
// import NewWindow from 'react-new-window'
// import ChartSpot from './ChartSpot'
import { useSelector } from 'react-redux'

const Navbar = ({width}) => {
	// console.log('width of navbar', width)
  const appState = useSelector ( state => state)
  // const [wind, setWind] = useState()

  // const windowRef = useRef(null)
  // const Demo = () => (
  //     <NewWindow>
  //       <h1>Hi 👋</h1>
  //     </NewWindow>
  //   )
  // function sendMessage(){
  //   if(wind){
  //     console.log('this is the wind from sendMessage', wind)
  //     wind.postMessage('message posted from other button', '/Chart')

  //   }
  // }
  // function handleClick(e){
  //   console.log('button was clicked', 'message', 'message1')
  //   // return(
  //   //   <NewWindow>hi</NewWindow>
  //   // )
  //   const opened = window.open('/Chart/')
  //   setWind(opened)
  //   // opened.document.write(<ChartSpot />)
  //   opened.addEventListener('message', (event) => {console.log('the window heard the message!', event)})
  //   opened.onmessage = (event) => {
  //     console.log('received the message from the opened onmessage', event)
  //   }
  //   opened.postMessage('posted message', '/Chart')
  // }
	return (
		<DesktopNav width={width}> 
  		<div className="logo">
          GBCC Lightning Viewer
      </div>
      {/*<Button onClick={handleClick}>chart</Button>*/}
      
      {/*<Button onClick={sendMessage}>sendMessage</Button>*/}
  		<Ul >
        {/*<li><Link to="/Chart?color=blue&ugh=wert"> chart link</Link> </li>*/}
  {/*      <li>About Us</li>
        <li>Contact Us</li>
        <li>Sign In</li>
        <li>Sign Up</li>*/}
      </Ul>
    </DesktopNav>
	)	
}

export default Navbar

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  position:fixed;
`

const DesktopNav = styled.nav`
  background: linear-gradient(135deg, #141414 0%,#9e9d9d 100%);
  width: ${({width})=> width ? width : '100%'};
  height: 55px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
   .logo {
   	display: flex;
   	position: fixed;
    flex: 2;
    color: white;
    font-size: 32px;
    padding-top:10px;
    padding-left:10px;
  }
  font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color:white;
  li {
    padding: 10px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
