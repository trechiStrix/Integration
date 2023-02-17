import React from "react";
import {validate} from './validation'
import { Login, Label, Error, LogBtn, Barra } from "../../styles/styled-components";

export default function Form({login}){
    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = React.useState({}); 

    function handleInputChange(event){
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        login(userData);
    }

    return (<div>
        <Login onSubmit={handleSubmit}>
            <Label htmlFor="username">Username:</Label>
            <br />
            <Barra type="text" name="username" onChange={handleInputChange} value={userData.username} placeholder="trechi@mail.com"/>
            <Error>{errors.username}</Error>

            <Label htmlFor="password">Password:</Label>
            <br />
            <Barra type="password" name="password" onChange={handleInputChange} value={userData.password} placeholder="trechi123"/>
            <Error>{errors.password}</Error>

            <LogBtn type="submit">LOGIN</LogBtn>
        </Login>
    </div>)
}