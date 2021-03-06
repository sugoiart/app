import { Footer } from "../components/Footer";
import { RandomPhoto } from "../util/types";
import { MainButton } from "../components/Button";
import { useState, useEffect } from "react";

const Home = () => {
    return (
        <>
            <div className="bg-cover bg-[#262336] bg-center bg-blend-overlay bg-fixed">
                <div className="h-[90vh] flex justify-center items-center">
                    <div className="max-w-[750px] py-[30px] px-[40px] text-center">
                        <h1 className="text-3xl font-nunito mb-4">~ ✨ Welcome to sugoiart ✨ ~</h1>
                        <MainButton name="API" link="/api" />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
