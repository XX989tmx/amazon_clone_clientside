import React from "react";
import reactBootstrap, {
  Col,
  Row,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import AccountInformationSection from "./components/AccountInformationSection";
import BrandLogoSection from "./components/BrandLogoSection";
import HumbuggerIconSection from "./components/HumbuggerIconSection";
import SearchFormSection from "./components/SearchFormSection";

const Header = (props) => {
  return (
    <header>
      <Row
        style={{
          height: "100%",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingRight: "20px",
          paddingLeft: "20px",
        }}
      >
        <HumbuggerIconSection
          sidebarToggleClickHandler={props.sidebarToggleClickHandler}
        />
        <BrandLogoSection />
        <SearchFormSection />
        <AccountInformationSection />
      </Row>
    </header>
  );
};

export default Header;
