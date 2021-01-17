import React from "react";

// reactstrap components
import { Button, UncontrolledTooltip } from "reactstrap";
import {
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
} from "reactstrap";

// core Argon components
import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../components/Footers/SimpleFooter.js";

import GreenbookLogo from "./../assets/img/Greenbook.png";

import GbBackground from "./../assets/img/gb_background.png";
import SearchBar from "../components/SearchBar";

class Search extends React.Component {
    render() {
        return (
            <>
                <DemoNavbar />
                <section>
                <main className="search-page" ref="main">
                    <section className="logo" style={{display:"flex", justifyContent:"center"}}>
                        <img style={{width: "75%", heigth: "auto"}} src={GreenbookLogo}/>
                    </section>
                    <SearchBar/>
                        <section id="mission">
                            <div>
                                <h1 style={{textAlign: "center", fontSize:"70px"}}>Our mission</h1>
                                <p style={{textAlign: "center", fontSize:"15px", fontWeight: 'bold'}}>
                                    text here
                                </p>
                                <br/>
                            </div>
                        </section>
                        <section id="howitworks">
                        <div>
                        <h1 style={{textAlign: "center", fontSize:"70px"}}>How it works</h1>
                        <p style={{textAlign: "center", fontSize:"15px", fontWeight: 'bold'}}>
                            text here
                        </p>
                        <br/>
                    </div>
                        </section>
                </main>
                </section>
                <SimpleFooter />
            </>
        );
    }
}

export default Search;