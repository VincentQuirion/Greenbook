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
import axios from "axios";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
            // "Flour",
            //     "Salt",
            //     "Pepper",
            //     "Milk",
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

            // Backend Communication
            const url = "http://127.0.0.1:8000/index.php/";
            console.log(list);
            axios.post(url, list)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err));



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


                // Backend Communication
                const url = "http://127.0.0.1:8000/index.php/";
                axios.post(url, list)
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err));
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
        const items = [];

        for (var i = 0; i < 10; i++) {
          items.push(
            <br/>
          );
        }
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
                        {items}
                        <div>
                            <h1 style={{textAlign: "center", fontSize:"70px"}}>How it works</h1>
                            <p style={{textAlign: "left", fontSize:"20px", fontWeight: 'bold', paddingLeft:"10%", paddingRight:"10%"}}> 
                                <ul>
                                    <li>
                                        By using the sign-in button in the navigation bar, you can sign in to your account and access all the personal profile with all your information such as followers and the people who you are following
                                    </li>
                                    <li>
                                        By using the upload button in the navigation bar, where it takes you to the upload page and you can upload any recipes you want to share with the public
                                    </li>
                                    <li>
                                        Besides the upload button, there is the search button where it takes you to the search page (which is also the home page)
                                    </li>
                                    <li>
                                        Inside, the search page you can search any recipes up or use the added ingredient to filter through the recipes
                                    </li>
                                    <li>
                                        At last, you can contact us or get new updates in the social media icons at the bottom of the page
                                    </li>
                                </ul>
                            </p>
                            <br/>
                        </div>
                        <div>
                            <h1 style={{textAlign: "center", fontSize:"70px"}}>Our mission</h1>
                            <p style={{textAlign: "left", fontSize:"20px", fontWeight: 'bold', paddingLeft:"10%", paddingRight:"10%"}}>
                                There are thousands or even millions of tons of food been thrown out each year. 
                                The massive waster is due to the expiring dates. Sometimes people won’t know how to cook certain ingredients and let them go past their expiring date. 
                                So, we create this web app to help people to find the recipe for their about to expire food. 
                                By minimizing the extra food waste, we could minimize the resources that are been used to produce the food which reduces pollution and help the enviroment 
                            </p>
                            <br/>
                        </div>
                        {items}
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