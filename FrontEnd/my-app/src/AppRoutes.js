import Home from "./pages/home/Home";
import GreenhouseSection from "./pages/greenhouses/greenhouses";
import HarvestSumary from "./pages/greenhouses/HarvestSumary";

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
    },
    {
        path: '/my-production',
        element: <HarvestSumary></HarvestSumary>
    }
];

export default AppRoutes;