import { BrowserRouter as Router } from 'react-router-dom';
import ProductListPage from "../pages/ProductListPage";
const App = () => {
    return (
        <Router>
            <ProductListPage />
        </Router>
    );
};

export default App;
