import React from "react";
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";
import { Navigate, Linked } from "../../styles/styled-components"; 

export default function Nav(props){
    return(
            <Navigate>
                <Link to="/home" style={{textDecoration: "none"}}>
                    <Linked>Home</Linked>
                </Link>

                <Link to="/about" style={{textDecoration: "none"}}>
                    <Linked>About</Linked>
                </Link>

                <Link to="/home" style={{textDecoration: "none"}}>
                    <Linked onClick={() => {
                        props.onSearch(Math.floor(Math.random()*826))}}
                    >Random</Linked>
                </Link>

                <Link to="/favorites" style={{textDecoration: "none"}}>
                    <Linked onClick={() => {}}
                    >Favorites</Linked>
                </Link>

                <SearchBar onSearch={props.onSearch} />

                <Link to="/" style={{textDecoration: "none"}}>
                    <Linked onClick = {props.logOut}
                    >Logout</Linked>
                </Link>
            </Navigate>
    )
}