import Home from "./pages/home/Home";
import GreenhouseSection from "./pages/greenhouses/greenhouses";
import HarvestSumary from "./pages/greenhouses/HarvestSumary";
import TemperatureHumidityCorrelation from "./pages/data_graphs/TemperatureHumidityCorrelation";
import GreenHouseInformation from "./pages/greenhouses/GreenHouseInformation";
import GreenhousesPage from "./pages/greenhouses/GreenHousesList";

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
        path: '/temperature-and-humidity/:g_id', // here we can add id to get data for each greenhouse
        element:<TemperatureHumidityCorrelation></TemperatureHumidityCorrelation>
    },
    {
        path: '/general-statistics',
        element: <GreenhousesPage></GreenhousesPage>
    },
];

export default AppRoutes;