import { ThemeProvider } from "next-themes";
/**
 * Own
 */
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider enableSystem={false}>
            <Component {...pageProps} />;
        </ThemeProvider>
    )
}

export default App;
