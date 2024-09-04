import Nav from "../components/Nav";
import Footer from "../components/Footer";
const AchievementPage = () => {
    return (
        <>
            <Nav />
            <div className="content">
                <div className="bg-white  flex justify-start items-center h-[200px] mt-[75px]">
                    <div>
                        <h1 className="pl-20 text-4xl text-slate-950 font-bold">
                            Achievement
                        </h1>
                        <p className="pl-20 text 2xl text-slate-950">
                            This was some of my Achievement and Experience in my career
                        </p>
                    </div>
                </div>
                <div className="bg-slate-950">
                    <h1 className="p-10 text-2xl text-white">
                        8th Place at Student Competency Test 2023
                    </h1>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}
export default AchievementPage