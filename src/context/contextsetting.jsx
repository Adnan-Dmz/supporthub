import { createContext } from "react";
import useStateSetting from "../custom hook/CHstatesetting"
export const StateSetting = createContext(null)
export const StateSettingProvider = (props) => {
    const { emailSetting, setEmailSetting, nameSetting, setNameSetting, one, backgroundside, setBackgroundside } = useStateSetting()
    return <StateSetting.Provider value={{ emailSetting, setEmailSetting, nameSetting, setNameSetting, one, backgroundside, setBackgroundside }}>{props.children}</StateSetting.Provider>
}