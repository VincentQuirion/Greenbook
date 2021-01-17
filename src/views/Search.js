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
import axios from "axios";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestedRecipes : []
        }
    }

    handleIngredientsChange = (ingredients) => {
        // Backend Communication
        const url = "http://127.0.0.1:8000/index.php/";
        axios.post(url, ingredients)
            .then(res=>{this.setState({
                suggestedRecipes : [res]
            })})
            .catch(err=>console.log(err));

    }

    render() {
        return (
            <>
                <DemoNavbar />
                <section>
                <main className="search-page" ref="main">
                    <section className="logo" style={{display:"flex", justifyContent:"center"}}>
                        <img style={{width: "75%", heigth: "auto"}} src={GreenbookLogo}/>
                    </section>
                    <SearchBar startIngredients={[]} changeHandler={this.handleIngredientsChange}/>
                    <section>
                        <ul style={{display: "flex", flexWrap:"wrap",
                            flexFlow: "row wrap",
                            justifyContent: "center",
                            margin: "2vh -10vw",
                            listStyleType: "none"}}>
                            {this.state.suggestedRecipes.map(item => (
                                <li key={item} style={{marginRight: 30, marginBottom:15}}>
                                    <Button outline color={"#eefbf6"} onClick={(e) => {e.preventDefault()}}><img style={{height: "40vh", width:"auto"}} src={item.src}/></Button>
                                </li>
                            ))}
                        </ul>
                    </section>
                        <section id="mission">
                            <div>
                                <h1 style={{textAlign: "center", fontSize:"70px"}}>Our mission</h1>
                                <p style={{textAlign: "center", fontSize:"25px", fontWeight: 'bold', margin:"0 5vw"}}>
                                    Climate change is a serious threat to many species including ours.<br/><br/>
                                    Food waste is a big part of the problem.
                                    If it were a country, it would rank third as the biggest CO2 emitter after the United States and China.<br/>
                                    <p style={{fontWeight:"normal", fontSize:"15px"}}>Sources: Food & Agricultural Organization of the United Nations http://www.fao.org/docrep/018/i3347e/i3347e.pdf</p>
                                    The Greenbook community uses the app to tackle food waste by cooking delicious recipes with almost out of date ingredients.
                                </p>
                                <br/>
                            </div>
                        </section>
                        <section id="howitworks">
                        <div>
                        <h1 style={{textAlign: "center", fontSize:"70px"}}>How it works</h1>
                        <p style={{textAlign: "center", fontSize:"25px", fontWeight: 'normal', margin:"0 5vw"}}>
                            <ul>
                                <li>
                            All you have to do is enter the ingredients you already have at home, and Greenbook will recommend you recipes that you make with them!
                                </li>
                                <li>
                                    You can also easily share your favorite recipes to help the community grow! (really appreciated)
                                </li>
                                </ul>
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