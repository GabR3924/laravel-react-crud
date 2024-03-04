import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./views/Login";

const AppRouter = () => {
    return (
        <Router>
            <Route path="/login" component={Login} />
            {/* Agrega más rutas aquí según sea necesario */}
        </Router>
    );
}

export default AppRouter;
