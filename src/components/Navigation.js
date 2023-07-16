import React, { useState, useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";
import i18n from '../i18n';
import '../App.css'

function Navigation() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  function changeLocale (l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  return (
    <Navbar bg="light" expand="lg" className="rounded-navbar"> {/* Add the custom class */}
      <Container>
        <Navbar.Brand href="#">ru / eng</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={t('language')} id="basic-nav-dropdown">
            <NavDropdown.Item href="#" onClick={() => changeLocale('en')}>English</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => changeLocale('ru')}>Русский</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
