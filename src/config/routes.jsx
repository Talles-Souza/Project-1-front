import { React, useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../features/home/pages";
import LoginPage from "../features/login/pages";
import { Register } from "../features/register/pages";
import { Profile } from "../features/profile/pages";
import { AuthenticationContext } from "../services/context/token";
import { Repository } from "../features/repository/pages";

export const Root = () => {


    const { token,auth, isAuthenticated, user } = useContext(AuthenticationContext);
    const [loading, setLoading] = useState(true);
    async function handleAuth() {
        await isAuthenticated();
        setLoading(false)
    }
    useEffect(() => {
        handleAuth()
        console.log(auth);
    }, [user,token]);

    if (loading) return <>Loading</>
    return (
        <BrowserRouter>
            {auth ?

                <Routes>

                    <Route path="*" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/repository" element={<Repository />} />

                </Routes>
                :
                <Routes>
                    <Route path="*" element={<LoginPage />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            }

        </BrowserRouter>
    );
}