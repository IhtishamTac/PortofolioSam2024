import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import bg from "../assets/img/bg.jpg";
import medianHome from "../assets/img/median-home.png";
import ujikomHome from "../assets/img/ujikom-home.png";
import person from "../assets/img/profile.jpg"
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <Nav />
            <div className="imgbg bg-slate-950 flex justify-between items-center">
                <div style={{ marginLeft: '120px' }}>
                    <h1 className=" text-white text-left text-5xl font-bold">Hi!,</h1>
                    <h1 className=" text-white text-left text-5xl font-bold">I&apos;m <span className="text-blue-600">Roby Ihtisham</span></h1>
                    <h1 className=" text-white text-left text-5xl font-bold"><span className="text-blue-300">Web</span> and <span className="text-blue-300">Backend Developer</span></h1>
                </div>
                <img src={person} className="profile-landing"></img>
            </div>
            <div className="about-me">
                <h1 className="p-10 text-slate-950 text-left text-4xl font-bold">About me</h1>
                <p className="pl-20 text-3xl">I&apos;m a Freshly Graduated Student from <b>SMKN2 Kota Sukabumi.</b></p>
                <p className="pl-20 text-3xl">I was Hoping to Contribute on an Awesome Project soon. and<b> I&apos;m open for Freelancing!</b></p>
            </div>
            <div className="prev-project bg-slate-950">
                <div className="flex justify-between">
                    <h1 className="p-10 text-white text-left text-4xl font-bold">My Previous Project</h1>
                    {/* <Link className="text-white m-10 hover:underline">Other project...</Link> */}
                </div>
                <div className="card-project">
                    <div className="project p1 flex justify-between items-center gap-10">
                        <img src={medianHome} style={{ width: '550px' }}></img>
                        <div className="project-desc">
                            <h1 className="text-white text-4xl font-bold">Median E-Certificate</h1>
                            <p className="text-white">
                                This is a Project that <b>We</b> Made, when i was Internship at <b>PT. Median Skill</b>. This project was for making <b>E-Certificate</b> by Importing <b>CSV Formats</b> file
                            </p>
                        </div>
                    </div>
                    <div className="project p2 flex justify-between items-center gap-10">
                        <div className="project-desc">
                            <h1 className="text-white text-4xl font-bold">Flybook</h1>
                            <p className="text-white">
                                This is my project for <b>Uji Kompetensi (Competensies Test)</b> at SMKN2 Kota Sukabumi. This website was for <b>Cashier</b> on an <b>Offline Book Store</b>
                            </p>
                        </div>
                        <img src={ujikomHome} style={{ width: '550px' }}></img>
                    </div>
                    <div className="project p3 flex justify-center items-center">
                        <Link to={'/other-project'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                            Check on Other Project &#8594;
                        </Link>

                        {/* <div className="project-desc">
                            <h1 className="text-white text-4xl font-bold">Flybook</h1>
                            <p className="text-white">
                                This is my project for <b>Uji Kompetensi (Competensies Test)</b> at SMKN2 Kota Sukabumi. This website was for <b>Cashier</b> on an <b>Offline Book Store</b>
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <div style={{height:'300px'}}>

            </div> */}
            <Footer />

        </>
    );
};

export default LandingPage;
