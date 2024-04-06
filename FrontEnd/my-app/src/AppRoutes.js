import Home from "./pages/home/Home";
import GreenhouseSection from "./pages/greenhouses/greenhouses";

const AppRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/my-greenhouses',
        element:<GreenhouseSection></GreenhouseSection>
    }
];

export default AppRoutes;