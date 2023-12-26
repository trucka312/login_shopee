import { Button, Form, Input, Flex, Divider } from 'antd'
import { Link } from 'react-router-dom'

import { registerReqBody } from '../../utils/typeForm';

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='customer-wrapper'>
      <Flex className='login-container register-container' justify={'flex-end'} align={'center'}>
        <Flex className='content' align={'center'} vertical={true}>
          <div className='content-header'>
            <h2>Đăng ký</h2>
          </div>
          <div className='form-container'>
              <Form
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
                style={{ maxWidth: 600 }}
                scrollToFirstError
              >
                <Form.Item<registerReqBody>
                  name="phone"
                  rules={[{ required: true, message: 'Vui lòng điền vào mục này' }]}
                >
                  <Input style={{ width: '100%' }} placeholder='Số điện thoại' />
                </Form.Item>

                <Form.Item className='button-wrapper'>
                  <Button type='primary' htmlType='submit'>
                    Tiếp theo
                  </Button>
                </Form.Item>
              </Form>
              <Divider plain>HOẶC</Divider>
              <div className='button-social'>
                <Button>
                  <span>Facebook</span>
                </Button>
                <Button>
                  <span>Google</span>
                </Button>
              </div>
          </div>

          <div className='agree'>
            <p>Bằng việc đăng kí, bạn đã đồng ý với Shopee về </p>
            <p>
              <Link to='/'>Điều khoản dịch vụ</Link> 
              & 
              <Link to='/'>Chính sách bảo mật</Link></p>
          </div>

          <div className='signup'>
            <span>Bạn đã có tài khoản? </span>
            <Link to='/login'>Đăng nhập</Link>
          </div>
        </Flex>
      </Flex>
    </div>
  )
}

export default Register
