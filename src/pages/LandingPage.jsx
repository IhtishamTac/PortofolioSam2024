import Nav from "../components/Nav";
import Footer from "../components/Footer";
import medianHome from "../assets/img/median-home.png";
import ujikomHome from "../assets/img/ujikom-home.png";
import person from "../assets/img/profile.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <Nav />
            <div className="imgbg bg-slate-950 flex flex-col md:flex-row justify-between items-center p-8">
                <div className="text-left md:ml-10 lg:ml-20">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Hi!,</h1>
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                        I&apos;m <span className="text-blue-600">Roby Ihtisham</span>
                    </h1>
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                        <span className="text-blue-300">Web</span> and <span className="text-blue-300">Backend Developer</span>
                    </h1>
                </div>
                <img
                    src={person}
                    className="profile-landing w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full mt-8 md:mt-0"
                    alt="Roby Ihtisham"
                />
            </div>

            <div className="about-me p-8 md:p-16">
                <h1 className="text-slate-950 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">About me</h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-4">
                    I&apos;m a Freshly Graduated Student from <b>SMKN2 Kota Sukabumi.</b>
                </p>
                <p className="text-lg sm:text-xl md:text-2xl">
                    I was hoping to contribute to an Awesome Project soon. <b>I&apos;m open for Freelancing!</b>
                </p>
            </div>

            <div className="prev-project bg-slate-950 p-8 md:p-16">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">My Previous Project</h1>
                </div>
                <div className="card-project space-y-10">
                    <div className="project flex flex-col lg:flex-row justify-between items-center gap-10">
                        <img src={medianHome} className="w-full lg:w-1/2" alt="Median E-Certificate" />
                        <div className="project-desc mt-8 lg:mt-0">
                            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Median E-Certificate</h1>
                            <p className="text-white text-base sm:text-lg md:text-xl">
                                This is a Project that <b>We</b> made when I was an intern at <b>PT. Median Skill</b>. This project was for making <b>E-Certificate</b> by importing <b>CSV Formats</b> files.
                            </p>
                        </div>
                    </div>
                    <div className="project flex flex-col lg:flex-row justify-between items-center gap-10">
                        <div className="project-desc order-2 lg:order-1 mt-8 lg:mt-0">
                            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Flybook</h1>
                            <p className="text-white text-base sm:text-lg md:text-xl">
                                This is my project for <b>Uji Kompetensi (Competency Test)</b> at SMKN2 Kota Sukabumi. This website was for <b>Cashier</b> on an <b>Offline Book Store</b>.
                            </p>
                        </div>
                        <img src={ujikomHome} className="w-full lg:w-1/2 order-1 lg:order-2" alt="Flybook Project" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LandingPage;
