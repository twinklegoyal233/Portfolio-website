import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { FaBars } from 'react-icons/fa';

import {
  ButtonContainer,
  NavLink,
  GitHubButton,
  Nav,
  Span,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  MobileLink,
  MobileMenu
} from "./NavbarStyledComponen";
import { DiCssdeck } from "react-icons/di";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setisOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>Gthub Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setisOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setisOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setisOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setisOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href="" target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;