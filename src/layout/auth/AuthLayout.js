import { Outlet } from "react-router-dom";
import Container from "../container/container";
import Header from "../header/header";

function AuthLayout(){
    return(
        <>
            <Header />
             <Container>
                <Outlet />
             </Container>
 
        </>
    )
}


export default AuthLayout;