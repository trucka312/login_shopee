import { Input } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { useState } from "react";

const SetPassword = () => {
    const [showPass, setShowPass] = useState(false);
    const handleShowPass = () => {
        setShowPass(!showPass)
    }
    
    return (
        <div className="confirm-step confirm-password">
            <h2 className="confirm-heading">Thiết lập mật khẩu</h2>
            <p className="subtitle">Bước cuối! Thiết lập mật khẩu để hoàn tất việc đăng ký.</p>
            <div className="password">
                <Input type={showPass === false ? 'password': 'text'} required />
                <span className="btn-show" onClick={handleShowPass}>
                    {showPass === false ? <EyeOutlined style={{ fontSize: '20px' }} />: <EyeInvisibleOutlined style={{ fontSize: '20px' }} />}
                </span>
            </div>
            <ul className="rules">
                <li>Ít nhất một kí tự viết thường</li>
                <li>Ít nhất một kí tự viết hoa</li>
                <li>8-16 kí tự</li>
                <li>Chỉ các chứx cái, số và kí tự phổ biến mới có thể được sử dụng</li>
            </ul>
        </div>
    )
};

export default SetPassword;
