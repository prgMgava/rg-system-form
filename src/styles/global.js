import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
}

:root{
    --white:#fff;
    --white-input:#f0f0f0;
    --azure:#F0FFFF;
    --blue-circle:#04befe;
    --blue:#5995fd;
    --blue-hover:#4d84e2;
    --blue-dark-circle:#4481eb;
    --mesage-error:#eb7171;
    --gray-bg:#F0F0F0;
    --gray-placeholder: #aaa;
    --gray-light: #acacac;
    --gray:#444;
    --gray-dark: #333;
}

body, input {
    font-family: "Poppins",sans-serif;
}

input{
    background: none;
    border: none;
}

button{
    cursor: pointer;
}
`