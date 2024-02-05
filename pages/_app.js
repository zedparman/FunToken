import "../styles/globals.css";

import {ERC20Provider} from "../context/FunToken";
import NavBar from "../components/NavBar/NavBar";

const MyApp = ({ Component, pageProps }) => (
    <ERC20Provider>
        <Component {...pageProps} />;
    </ERC20Provider>
)

export default MyApp;
