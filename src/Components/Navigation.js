import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import routes from '../helpers/routes'
import '../css/estilos.css'

export default function Navigation() {

    return (
        
            <nav class="navbar navbar-expand-lg"style={{backgroundColor:'rgba(33, 150, 243)'}}>
            <div class="container-fluid">
                <Navbar.Brand  className='select' as={NavLink}to={routes.home}>Menu</Navbar.Brand>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <NavDropdown title="Admin">
            
            <NavDropdown.Item as={NavLink}to={routes.admin.users}>Users</NavDropdown.Item>
            <NavDropdown.Item as={NavLink}to={routes.admin.products}>Productos</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink}to={routes.admin.compras}>Compras</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink}to={routes.admin.registros}>Registros</NavDropdown.Item>
                                </NavDropdown>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Nav.Link as={NavLink}to={routes.login}>Login</Nav.Link>
                <Nav.Link as={NavLink}to={routes.nosotros}>Nosotros</Nav.Link>
                <Nav.Link as={NavLink}to={routes.register}>Registrarse</Nav.Link>
                <Nav.Link as={NavLink}to={routes.products}>Productos</Nav.Link>
                
                <Nav.Link as={NavLink}to={routes.account}>Mi Cuenta<img  style={{maxWidth:'40px'}} src="https://equipounoyseiscommx.com/blas/images/imm.png" alt="logito"></img>
                </Nav.Link>
                </div>
            </div>
            </div>
        </nav>      
    
)
}
