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

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
            "Flour",
                "Salt",
                "Pepper",
                "Milk",
            ]
        }
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    addItem = (e) => {
        // Prevent button click from submitting form
        e.preventDefault();

        // Create variables for our list, the item to add, and our form
        let list = this.state.list;
        const newItem = document.getElementById("addInput");
        const form = document.getElementById("addItemForm");

        // If our input has a value
        if (newItem.value !== "") {
            // Add the new item to the end of our list array
            list.push(newItem.value);
            // Then we use that to set the state for list
            this.setState({
                list: list
            });
            // Finally, we need to reset the form
            newItem.classList.remove("is-danger");
            form.reset();
        } else {
            // If the input doesn't have a value, make the border red since it's required
            newItem.classList.add("is-danger");
        }
    }

    removeItem = (item) => {
        // Put our list into an array
        const list = this.state.list.slice();
        // Check to see if item passed in matches item in array
        list.some((el, i) => {
            if (el === item) {
                // If item matches, remove it from array
                list.splice(i, 1);
                return true;
            }
        });
        // Set state to list
        this.setState({
            list: list
        });
    }

    // Used to manage enter keypresses and future AJAX
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.addItem(event);
        }}

    render() {
        return (
            <>
                <DemoNavbar />
                <main className="search-page" ref="main">
                    <section className="logo" style={{display:"flex", justifyContent:"center"}}>
                        <img style={{width: "75%", heigth: "auto"}} src={GreenbookLogo}/>
                    </section>
                    <section className="Search-bar">
                        <Form onSubmit={() => {return false;}} className="form" id="addItemForm" style={{textAlign: "center",
                                                                        padding:"5px"}}>

                            <FormGroup onKeyPress={this.handleKeyPress} style={{margin: "0vw 20vw 0vw"}}>
                            <InputGroup className="mb-4">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-zoom-split-in" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input id="addInput" placeholder="Search" type="text"
                                    style={{fontSize: "3vh"}}/>
                            </InputGroup>
                            </FormGroup>
                            <Button color="success" outline type="button" onClick={this.addItem}>
                                Add Ingredient
                            </Button>
                        </Form>
                        <ul style={{display: "flex", flexWrap:"wrap",
                                        flexFlow: "row wrap",
                                        justifyContent: "center",
                                        margin: "2vh 3vw",
                                        listStyleType: "none"}}>
                            {this.state.list.map(item => (
                                <li key={item} style={{marginRight: 30, marginBottom:15}}>
                                    <Button color="secondary" size="lg" type="button">
                                        {item}
                                    </Button>
                                    <Button
                                        color="info"
                                        data-placement="top"
                                        id="change-expiry-date"
                                        size="sm"
                                        type="button"
                                    >
                                        <i className="ni ni-calendar-grid-58"/>
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        placement="top"
                                        target="change-expiry-date"
                                    >
                                        Change expiry date
                                    </UncontrolledTooltip>

                                    <Button
                                        color="danger"
                                        data-placement="top"
                                        id="remove"
                                        size="sm"
                                        type="button"

                                        onClick={() => this.removeItem(item)}
                                    >
                                        <i className="ni ni-fat-remove"/>
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        placement="top"
                                        target="remove"
                                    >
                                        Remove
                                    </UncontrolledTooltip>
                                </li>
                            ))}
                        </ul>
                        <section id="mission">

                        </section>
                        <section id="howitworks">

                        </section>
                    </section>
                </main>
                <SimpleFooter />
                <script>
                    //addEventListener
                    document.getElementByTag('a').addEventListener('click', onClickHandler);
                </script>
            </>
        );
    }
}

export default Search;