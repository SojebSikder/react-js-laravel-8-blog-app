import React from 'react';
import Header from './Header';

// Material ui
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500],
        }
    }
});

function Index() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Header />
            </div>
        </ThemeProvider>
    );
}

export default Index;

