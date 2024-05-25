import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/homeIndex";
import { Watch } from "./pages/Watch/watch.Index";
import { NotFound } from "./pages/NotFound/notFoundIndex";
import { Favorites } from "./pages/Favorites/favoritesIndex";
import { FavoritesProvider } from "./Components/contexts/Favorites";
import { FormAddVideo } from "./pages/FormAdd/formAddIndex";

export function AppRoutes() {
    return (
        <BrowserRouter>
            {/* <FavoritesProvider> */}
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/watch/:id" element={<Watch />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/add" element={<FormAddVideo />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            {/* </FavoritesProvider> */}
        </BrowserRouter>
    )
}