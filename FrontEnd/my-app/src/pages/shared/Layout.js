import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import {Container} from "react-bootstrap";

function Layout(props) {

    return (
        <div>
            <Header/>
            <Container>
                {props.children}
            </Container>
            <Footer/>
        </div>
    );
}

export default Layout;