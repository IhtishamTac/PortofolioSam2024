import Nav from "../components/Nav";
import Footer from "../components/Footer";

import profile from "../assets/img/profile.jpg";
import smkn2logo from "../assets/img/smkn2logo.png";

import phplogo from "../assets/img/languages/phplogo.png";
import jslogo from "../assets/img/languages/js.png";
import pythonlogo from "../assets/img/languages/python.svg";

const AboutMe = () => {
    return (
        <>
            <Nav />
            <div className="bg-slate-950 headerProject flex justify-start items-center">
                <h1 className="p-20 text-4xl text-white font-bold">
                    About Me
                </h1>
            </div>
            <>
                <div className="p-10  pl-[300px] pr-[300px] pb-20">
                    <div className="flex justify-between items-center">
                        <div className="wrap">
                            <h1 className="text-3xl font-semibold">
                                Roby Ihtisham Koernia
                            </h1>
                            <p className="pl-[20px]">
                                I&apos;m interested in Learning Something New!
                            </p>
                        </div>
                        <img src={profile} className="w-[200px] rounded-[50%]" alt="profilepic" />
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <img src={smkn2logo} className="w-[150px]" alt="" />
                        <h1 className="text-3xl font-semibold text-right">
                            Graduated from SMKN2 Kota Sukabumi at 2024
                        </h1>
                    </div>
                </div>
                <div className="programming-languages bg-slate-950">
                    <div className="pr-[300px] pl-[300px] pt-20">
                        <h1 className="text-white text-3xl font-bold text-center">Programming Tech that i use</h1>
                        <div className="tech p-10">
                            <div className="languages">
                                <h1 className="text-white text-2xl font-semibold">
                                    Languages
                                </h1>
                                <div className="pl-10 pr-10 pt-3 flex gap-2">
                                    <img src={phplogo} className="h-[50px]" alt="langlogo" />
                                    <img src={jslogo} className="h-[50px]" alt="langlogo" />
                                    <img src={pythonlogo} className="h-[50px]" alt="langlogo" />
                                </div>
                            </div>
                            <div className="framework mt-5 text-right">
                                <h1 className="text-white text-2xl font-semibold">
                                    Framework
                                </h1>
                                <div className="pl-10 pr-10 pt-3 flex gap-2 justify-end">
                                    <img src={phplogo} className="h-[50px]" alt="langlogo" />
                                    <img src={jslogo} className="h-[50px]" alt="langlogo" />
                                    <img src={pythonlogo} className="h-[50px]" alt="langlogo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <Footer />
        </>
    )
}
export default AboutMe;