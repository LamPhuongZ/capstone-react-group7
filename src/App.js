import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
const BookingPage = lazy(() => import("./pages/BookingPage/BookingPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));

function App() {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:movieId" element={<MovieDetailsPage />} />
            <Route path="/booking/:showTimeId" element={<BookingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
