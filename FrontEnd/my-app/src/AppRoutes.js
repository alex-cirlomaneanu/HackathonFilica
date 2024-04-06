import Home from "./pages/home/Home";
import GreenHouseInformation from "./pages/greenhouses/GreenHouseInformation";
import GreenhousesPage from "./pages/greenhouses/GreenHousesList";
import TemperatureData from "./pages/data_graphs/TemperatureData";

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
        element:<GreenHouseInformation></GreenHouseInformation>
    },
    {
        path: '/list-greenhouses',
        element: <GreenhousesPage></GreenhousesPage>
    },
    {
        path: '/greenhouse/:g_id',
        element:<GreenHouseInformation></GreenHouseInformation>
    },
    {
        path: '/temperature-evolution',
        element:<TemperatureData></TemperatureData>
    }
];

export default AppRoutes;