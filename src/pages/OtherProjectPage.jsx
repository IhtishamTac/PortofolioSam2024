import Footer from "../components/Footer";
import Nav from "../components/Nav";

import medianHome from "../assets/img/median-home.png";
import ujikomHome from "../assets/img/ujikom-home.png";

const OtherProjectPage = () => {
    return (
        <>
            <Nav />
            <div className="bg-slate-950 headerProject flex justify-start items-center">
                <h1 className="p-20 text-4xl text-white font-bold">
                    My Projects
                </h1>
            </div>
            <div className="mt-5 mb-10">
                <div className="project p1 flex justify-between items-center gap-10">
                    <img src={medianHome} style={{ width: '550px' }}></img>
                    <div className="project-desc">
                        <h1 className="text-black text-4xl font-bold">Median E-Certificate</h1>
                        <p className="text-black">
                            This is a Project that <b>We</b> Made, when i was Internship at <b>PT. Median Skill</b>. This project was for making <b>E-Certificate</b> by Importing <b>CSV Formats</b> file
                        </p>
                    </div>
                </div>
                <div className="project p2 flex justify-between items-center gap-10">
                    <div className="project-desc">
                        <h1 className="text-black text-4xl font-bold">Flybook</h1>
                        <p className="text-black">
                            This is my project for <b>Uji Kompetensi (Competensies Test)</b> at SMKN2 Kota Sukabumi. This website was for <b>Cashier</b> on an <b>Offline Book Store</b>
                        </p>
                    </div>
                    <img src={ujikomHome} style={{ width: '550px' }}></img>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default OtherProjectPage;