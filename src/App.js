import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/browse",
        element: <Browse />,
    },
]);

function App() {
    return <RouterProvider router={appRouter} />;
}

export default App;
