import { CheckCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

interface ConfirmPhoneNumberProps {
    phoneNumber: number;
}

const RegisterSuccess = ({phoneNumber}: ConfirmPhoneNumberProps) => {
    return (
        <div>
            <div className="confirm-step confirm-success">
            <h2 className="confirm-heading">Đăng ký thành công</h2>
            <CheckCircleOutlined style={{color: '#0ac70a', fontSize: '20px'}}/>
            <div className="subtitle">
                <p>Bạn đã tạo tài khoản Shopee thành công với số <span className='phone-number'>(+84){phoneNumber}</span></p>
                <p>Bạn sẽ được chuyển hướng đến Shopee trong 6 giây</p>
            </div>
            <Link  className='btn btn-home' to='/login'>Quay lai Shopee</Link>
        </div>
        </div>
    )
};

export default RegisterSuccess;
