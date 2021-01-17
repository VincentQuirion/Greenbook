import React from "react";

import DemoNavbar from "../components/Navbars/DemoNavbar";
import SimpleFooter from "../components/Footers/SimpleFooter";

import SearchBar from "../components/SearchBar";

import GreenbookLogo from "../assets/img/Greenbook.png";
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    UncontrolledTooltip,
    UncontrolledCarousel
} from "reactstrap";

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : []
        }
    }
    render() {
        return (
            <>
                <section>
                <DemoNavbar />
                <section>
                <Form style={{textAlign: "center", marginTop:"5vh"}}>
                    <h1>Upload a recipe</h1>
                    <FormGroup style={{margin: "2vh 20vw"}}>
                        <h3>Your recipe's name</h3>
                        <Input
                            id="recipeNameInput"
                            placeholder="Bitch Lasagna"
                            // type="Search"
                            style={{textAlign: "center",
                                    fontSize: "3vh"}}
                            onKeyPress={(e) => {if (e.key === "Enter"){e.preventDefault();document.getElementById("addInput").focus()}}}
                        />
                    </FormGroup>
                    <FormGroup style={{margin: "2vh 10vw"}}>
                        <h3>Ingredients</h3>
                        <SearchBar/>
                    </FormGroup>
                    <FormGroup style={{margin: "0vh 20vw"}}>
                        <h3>Directions</h3>
                        <Input
                            id="directionsTextArea"
                            placeholder="1. Wash your hands ;)"
                            rows="3"
                            type="textarea"
                        />
                    </FormGroup>
                    <FormGroup style={{margin: "3vh 10vw"}}>
                        <h3>Pictures</h3>
                        <Input type="file" multiple="multiples" onChange={(e) => {let items = this.state.items; items.push({src: URL.createObjectURL(e.target.files[e.target.files.length - 1]), header:"", captionText:"Looks delicious!"}); this.setState({items:items});}} name="file" id="recipePicture" style={{marginLeft:"40%"}}/>
                        <ul style={{display: "flex", flexWrap:"wrap",
                            flexFlow: "row wrap",
                            justifyContent: "center",
                            margin: "2vh -10vw",
                            listStyleType: "none"}}>
                            {this.state.items.map(item => (
                                <li key={item} style={{marginRight: 30, marginBottom:15}}>
                                        <Button outline color={"#eefbf6"} onClick={(e) => {e.preventDefault()}}><img style={{height: "40vh", width:"auto"}} src={item.src}/></Button>
                                </li>
                            ))}
                        </ul>
                    </FormGroup>
                    <Button style={{margin:"20px"}} color="success" type="button">
                        Upload recipe
                    </Button>
                </Form>
                </section>
                <SimpleFooter />
                </section>
            </>
        );
    }

}

export default Upload;
