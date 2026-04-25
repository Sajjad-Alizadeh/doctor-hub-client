import {useState} from "react";
import toFarsiNumber from "../../../method/toFarsiNumber";
import DashboardUserList from "../user/DashboardUserList";
import Impression from "./Impression";
import MostFavoritePage from "./MostFavoritePage";
import RolesAnalysis from "./RolesAnalysis";
import DoctorRateAvg from "./DoctorRateAvg";


function DashboardAnalysisPage() {
    return (
        <div className='w-full h-full mx-3 flex flex-col pt-14'>
            <Impression/>
            <div className="flex gap-2">
                <div className="w-[50%] h-fit rounded-xl mt-14 pt-2 bg-white flex flex-col justify-center items-center gap-4">
                    <span className="font-medium">دسترسی ها</span>
                    <RolesAnalysis/>
                </div>
                <div className="w-[50%] h-fit rounded-xl mt-14 pt-2 bg-white flex flex-col justify-center items-center gap-4">
                    <span className="font-medium">میانگین امتیاز دکترها</span>
                    <DoctorRateAvg/>
                </div>
            </div>

        </div>
    )

}

export default DashboardAnalysisPage;