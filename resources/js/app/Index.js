import React from 'react';
import Header from './components/partials/Header';

// Material ui
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import Routes from './Routes';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: orange[500],
        }
    }
});

function Index() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Routes />
        </ThemeProvider>
    );
}

export default Index;

