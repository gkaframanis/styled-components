import styled, {ThemeProvider} from 'styled-components';
import {useState} from "react";
// GlobalStyles work with the theme as well.
import GlobalStyles from "./global-styles";

// Usually we set it up in a different file.
const LightTheme = {
    color: "#222",
    background: "#fff"
}

const DarkTheme = {
    color: "#fff",
    background: "#222"
}

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;

function App() {
    const [theme, setTheme] = useState(true);

    return (
        <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
            <GlobalStyles/>
            <Container>
                <h1>Hello World</h1>
                <button className={"btn"} onClick={() => setTheme(!theme)}>Toggle Me</button>
            </Container>
        </ThemeProvider>
    );
}

export default App;
