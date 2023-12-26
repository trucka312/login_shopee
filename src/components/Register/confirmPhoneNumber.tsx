import { useState } from "react";
import { Button } from "antd";

import OneTimeCode from "../Common/oneTimeCode";

import Zalo from '../../../public/images/socials/zalo.png'


interface ConfirmPhoneNumberProps {
    phoneNumber: number;
}

const ConfirmPhoneNumber = ({phoneNumber}: ConfirmPhoneNumberProps) => {
    const [otp, setOtp] = useState('');
    const [chooseOtherMethod, setChooseOtherMethod] = useState(false);
    const [method, setMethod] = useState(1);
    const onChange = (value: string) => setOtp(value);

    console.log(chooseOtherMethod)
    const handleChooseMethod = () => {
        setChooseOtherMethod(!chooseOtherMethod);
    }

    const handleChangeMethod = (method: number) => {
        setMethod(method)
        setChooseOtherMethod(!chooseOtherMethod);
    }

    console.log(method);
    
    return (
        <div className="confirm-step confirm-phone-number">
            {!chooseOtherMethod &&
                <>
                    <h2 className="confirm-heading">Nhập mã xác nhận</h2>
                    {method !== 3 ?
                        <p>mã xác nhận sẽ được gửi qua {method === 1 && 'Zalo'} đến</p>
                    :
                        <p>Mã xác minh của bạn sẽ được gửi bằng cuộc gọi thoại đến</p>
                    }
                    <p className="phone-number">
                        (+84){phoneNumber}
                    </p>
                    <OneTimeCode value={otp} valueLength={6} onChange={onChange}/>
                    <div className="confirm-again">
                        <p>Bạn vẫn chưa nhận được?</p>
                        <p>
                            <Button>Gửi lại</Button> 
                            hoặc thử 
                            <Button onClick={handleChooseMethod}>Các phương thức khác</Button>
                        </p>
                    </div>
                </>
            }
            {chooseOtherMethod && 
                <>
                    <h2 className="confirm-heading">Chọn phương thức xác minh khác</h2>
                    <div className="other-method-subtitle">
                        <p>Chọn một trong các phương thức bên dưới để gửi mã xác minh đến</p>
                        <p className="phone-number">(+84){phoneNumber}</p>
                    </div>
                    <ul className="method-list">
                        <li>
                            <Button onClick={() => handleChangeMethod(1)} className="btn btn-change-method">
                                <span className="icon"><img src={Zalo} alt="" /></span>
                                Zalo
                            </Button>
                        </li>
                        <li>
                            <Button onClick={() => handleChangeMethod(2)} className="btn btn-change-method">
                                <span className="icon"><svg viewBox="0 0 40 40" fill="none" className="dPR8ao"><path d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20Z" fill="#08F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 10c-5.399 0-10 3.796-10 8.744 0 2.811 1.508 5.272 3.781 6.85.05.035.113.076.177.118l-.58 2.454c-.056.243.02.499.197.665.179.166.43.214.653.125l.652-.26a762.147 762.147 0 0 1 2.887-1.14l.48-.184.035-.014c.558.085 1.133.129 1.718.129 5.399 0 10-3.796 10-8.743C30 13.796 25.399 10 20 10Zm-6 18.328.228.628-.228-.628Zm1.314-2.774a.687.687 0 0 0-.297-.741l-.015-.01-.045-.027a22.84 22.84 0 0 1-.47-.304c-1.989-1.38-3.207-3.455-3.207-5.729 0-3.967 3.78-7.398 8.72-7.398 4.94 0 8.72 3.43 8.72 7.399 0 3.967-3.78 7.398-8.72 7.398-.573 0-1.132-.047-1.673-.137a.622.622 0 0 0-.297.023l-.062.021a51.462 51.462 0 0 0-.645.245 285.054 285.054 0 0 0-2.408.95l.399-1.69Zm.896-6.328a1.232 1.232 0 1 1-2.464 0 1.232 1.232 0 0 1 2.464 0Zm4.928 0a1.232 1.232 0 1 1-2.464 0 1.232 1.232 0 0 1 2.464 0Zm3.696 1.232a1.232 1.232 0 1 0 0-2.464 1.232 1.232 0 0 0 0 2.464Z" fill="#fff"></path></svg></span>
                                Tin nhắn
                            </Button>
                        </li>
                        <li>
                            <Button onClick={() => handleChangeMethod(3)} className="btn btn-change-method">
                                <span className="icon"><svg viewBox="0 0 40 40" fill="none" className="dPR8ao"><path d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20Z" fill="#08F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.906 10.075c.367.123.659.377.862.646.674.895 1.647 2.315 2.242 3.567.404.85.178 1.738-.151 2.381-.338.659-.459 1.265-.206 1.738.368.685 1.078 1.689 1.84 2.594.377.449.756.861 1.098 1.188.355.34.625.541.786.621.142.07.37.052.9-.253.065-.037.144-.085.23-.137a9.6 9.6 0 0 1 .51-.294c.128-.067.285-.138.455-.182.17-.044.398-.073.645-.005.386.108.875.41 1.32.724.476.337 1.002.761 1.486 1.202.48.437.942.91 1.272 1.343.164.215.316.447.418.678.09.205.206.554.086.923-.209.642-.648 1.524-1.372 2.201-.749.7-1.815 1.184-3.171.918-1.947-.383-3.693-1.57-5.13-2.852-1.335-1.193-2.467-2.525-3.29-3.494l-.191-.225c-1.08-1.268-2.434-3.251-3.327-5.239-.446-.993-.792-2.021-.917-2.983-.124-.954-.041-1.931.482-2.73.73-1.116 1.361-1.78 1.875-2.146a1.366 1.366 0 0 1 1.248-.184Zm-.434 1.448c-.31.236-.8.734-1.434 1.703-.25.381-.35.945-.25 1.715.1.763.386 1.643.799 2.563.825 1.838 2.097 3.702 3.1 4.88l.186.22c.828.975 1.897 2.232 3.153 3.352 1.358 1.212 2.86 2.194 4.42 2.5.797.157 1.391-.107 1.856-.542.449-.419.76-.988.928-1.446a2.175 2.175 0 0 0-.228-.35c-.254-.334-.642-.738-1.088-1.144a14.55 14.55 0 0 0-1.343-1.085c-.365-.259-.63-.41-.775-.474-.024.01-.054.024-.094.045-.115.059-.216.12-.34.197-.094.057-.201.122-.337.2-.486.28-1.389.756-2.315.297-.373-.185-.776-.519-1.155-.88-.393-.375-.81-.83-1.211-1.308-.798-.949-1.579-2.04-2.013-2.85-.622-1.162-.194-2.377.193-3.131.226-.442.25-.803.131-1.052-.531-1.118-1.433-2.444-2.085-3.309a.527.527 0 0 0-.098-.101Zm12.785 15.014-.003-.011a.042.042 0 0 1 .003.011Z" fill="#fff"></path></svg></span>
                                Cuộc gọi thoại
                            </Button>
                        </li>
                    </ul>
                </>
            }
        </div>
    )
};

export default ConfirmPhoneNumber;
