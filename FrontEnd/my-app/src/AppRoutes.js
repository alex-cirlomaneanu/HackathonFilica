import Home from "./pages/home/Home";
import GreenHouseInformation from "./pages/greenhouses/GreenHouseInformation";
import GreenhousesPage from "./pages/greenhouses/GreenHousesList";
import TemperatureHumidityCorrelation from "./pages/data_graphs/TemperatureHumidityCorrelation";
import GeneralStatisticsPage from "./pages/data_graphs/GeneralStatisticsPage";
import DataGraphsPage from "./pages/data_graphs/DataGraphsPage";

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
        path: '/general-statistics/graphs/:g_id', // here we can add id to get data for each greenhouse
        element:<DataGraphsPage></DataGraphsPage>
    },
    {
        path: '/general-statistics',
        element: <GeneralStatisticsPage></GeneralStatisticsPage>
    },
];

export default AppRoutes;