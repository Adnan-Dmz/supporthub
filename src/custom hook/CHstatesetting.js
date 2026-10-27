import { useEffect, useState } from "react";
const useStateSetting = () => {
    const [nameSetting, setNameSetting] = useState(() => {
        const savename = localStorage.getItem("changenameadmin");
        return savename !== null ? JSON.parse(savename) : "Adnan-Dmz";
    })
    useEffect(() => {
        localStorage.setItem("changenameadmin", JSON.stringify(nameSetting))
    }, [nameSetting])
    const [emailSetting, setEmailSetting] = useState(() => {
        const saveemail = localStorage.getItem("chngeemail");
        return saveemail !== null ? JSON.parse(saveemail) : "adnan55dmz@gmail.com"
    })
    useEffect(() => {
        localStorage.setItem("chngeemail", JSON.stringify(emailSetting))
    }, [emailSetting])
    const [one, setOne] = useState("A")
    const [backgroundside, setBackgroundside] = useState(() => {
        const savebackground = localStorage.getItem("changebackground");
        return savebackground !== null ? JSON.parse(savebackground) : false
    })
    useEffect(() => {
        localStorage.setItem("changebackground", JSON.stringify(backgroundside))
    }, [backgroundside])
    useEffect(() => {
        setOne(nameSetting.charAt(0))
    }, [nameSetting])
    return { emailSetting, setEmailSetting, nameSetting, setNameSetting, one, backgroundside, setBackgroundside }
}
export default useStateSetting