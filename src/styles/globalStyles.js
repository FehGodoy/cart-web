import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: var(--font);
    background-color: var(--background);
    overflow-x:hidden;
}


:root{
    --font: 'Poppins', sans-serif;
    --blueButton: #3B74F2;
    --black:#000;
    --white: #fff;
    --border:#ddd;
    --background:#D1D8E5;
    --backFrete: #C7FFA6;
    --colorFrete: #217A00;
    --red: #ff0000
}

`;