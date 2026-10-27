import "../componentcss/Setting.css"
import { TitleContext } from "../context/contexttitleroute"
import { useEffect, useContext, useState } from "react"
import { StateSetting } from "../context/contextsetting"
import boy1 from "../BackgroundsAdmin/boy1.png"
import boy2 from "../BackgroundsAdmin/boy2.png"
import girl1 from "../BackgroundsAdmin/girl1.png"
import girl2 from "../BackgroundsAdmin/girl2.png"
const Settings = () => {
    const { setEmailSetting, setNameSetting, one, backgroundside, setBackgroundside } = useContext(StateSetting)
    const { setTitleroute } = useContext(TitleContext)
    useEffect(() => {
        setTitleroute("SETTING")
    }, [])
    const [nameAdmin, setNameAdmin] = useState("")
    const [emailAdmin, setEmailAdmin] = useState("")
    const [background, setBackground] = useState(backgroundside)
    return (
        <div className="div-600">
            <div className="div-setting">
                <div className="div-emailname">
                    <div className="div-lablee">
                        <label className="lable-setting">نام ادمین</label>
                        <div className="div-inputbtn">
                            <button className="btn-svg">
                                <svg className="pensvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                    <path d="m15 5 4 4" />
                                </svg>
                            </button>
                            <input placeholder="Enter Admin Name..." value={nameAdmin} className="input-adminchnge" onChange={(e) => setNameAdmin(e.target.value)} />
                        </div>
                    </div>
                    <div className="div-lablee">
                        <label className="lable-setting">ایمیل ادمین</label>
                        <div className="div-inputbtn">
                            <button className="btn-svg">
                                <svg className="pensvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                    <path d="m15 5 4 4" />
                                </svg>
                            </button>
                            <input placeholder="Enter Admin Email... " value={emailAdmin} className="input-adminchnge" onChange={(e) => setEmailAdmin(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="div-titlesetting">
                    <div>
                        <h2 className="hhh">انتخواب تصویر پروفایل</h2>
                    </div>

                    <div>
                        {
                            background ? <img className="img-nowbackground" src={background}></img> : <div className="div-nowbackground">{one}</div>
                        }
                    </div>
                </div>
                <div className="div-btnsimg">
                    <button className="btn-img1" onClick={() => setBackground(boy1)}><img className="imgg" src={boy1} alt="boy1" /></button>
                    <button className="btn-img2" onClick={() => setBackground(boy2)}><img className="imgg" src={boy2} alt="boy2"></img></button>
                    <button className="btn-img3" onClick={() => setBackground(false)}><div className='adminn-imggg'>{one}</div></button>
                    <button className="btn-img4" onClick={() => setBackground(girl1)}><img className="imgg" src={girl1} alt="girl1"></img></button>
                    <button className="btn-img5" onClick={() => setBackground(girl2)}><img className="imgg" src={girl2} alt="girl2" /></button>
                </div>
                <div>
                    <button className="btn-savestate" onClick={() => {
                        if (nameAdmin.trim()) { setNameSetting(nameAdmin) };
                        if (emailAdmin.trim()) { setEmailSetting(emailAdmin) };
                        setBackgroundside(background);
                        setEmailAdmin("");
                        setNameAdmin("");
                    }}>ذخیره تغییرات</button>
                </div>
            </div>
        </div>
    )
}
export default Settings