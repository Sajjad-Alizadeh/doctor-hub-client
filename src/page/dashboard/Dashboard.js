import {useEffect, useState} from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardUserPage from "./user/DashboardUserPage";
import DashboardSpecialityPage from "./speciality/DashboardSpecialityPage";
import {toast, Toaster} from "react-hot-toast";
import DashboardCategoryPage from "./category/DashboardCategoryPage";
import DashboardDoctorPage from "./doctor/DashboardDoctorPage";
import DashboardAnalysisPage from "./analysis/DashboardAnalysisPage";

function Dashboard() {


    const [isErrorToast, setIsErrorToast] = useState(false);
    const [showToast, setShowToast] = useState(false)
    const [toastMsg, setToastMsg] = useState(null)
    const [isDoctorsSelected, setDoctorsSelected] = useState(false);
    const [isAnalysisSelected, setAnalysisSelected] = useState(true);
    const [isUsersSelected, setUsersSelected] = useState(false);
    const [isSpecialitiesSelected, setSpecialitiesSelected] = useState(false);
    const [isCategoriesSelected, setIsCategoriesSelected] = useState(false);

    useEffect(() => {
        if (showToast) {
            if (isErrorToast) {
                toast.error(toastMsg, {
                    style: {
                        marginTop: "10px",
                        direction: "rtl",
                        width: "300px"
                    }
                });
            } else {
                toast.success(toastMsg, {
                    style: {
                        marginTop: "10px",
                        direction: "rtl",
                        width: "300px"
                    }
                });
            }
        }
        setShowToast(false)

    }, [showToast])


    return (
        <div className='flex justify-center items-start flex-row  w-full h-full'>
            {
                isAnalysisSelected
                && <DashboardAnalysisPage/>
            }
            {
                isUsersSelected
                && <DashboardUserPage/>
            }
            {
                isSpecialitiesSelected
                && <DashboardSpecialityPage setToastMsg={setToastMsg} setShowToast={setShowToast}
                                            setIsErrorToast={setIsErrorToast}/>
            }
            {
                isDoctorsSelected
                && <DashboardDoctorPage/>
            }
            {
                isCategoriesSelected
                && <DashboardCategoryPage/>
            }
            <DashboardNavbar isDoctorsSelected={isDoctorsSelected} setDoctorsSelected={setDoctorsSelected}
                             isUsersSelected={isUsersSelected} setUsersSelected={setUsersSelected}
                             isSpecialitiesSelected={isSpecialitiesSelected} setSpecialitiesSelected={setSpecialitiesSelected}
                             isCategoriesSelected={isCategoriesSelected} setCategoriesSelected={setIsCategoriesSelected}
                             isAnalysisSelected={isAnalysisSelected} setAnalysisSelected={setAnalysisSelected}
            />
            <Toaster/>
        </div>
    )
}

export default Dashboard;