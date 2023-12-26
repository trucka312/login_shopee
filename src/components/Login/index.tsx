import { Button, Form, Input, Flex, Tooltip, Divider } from 'antd'
import { loginReqBody } from '../../utils/typeForm'
import { useState } from 'react'
import qrLogin from '../../assets/images/qrLogin.png'
import howToScan from '../../assets/images/how-to-scan.png'
import { useNavigate } from 'react-router-dom'
import { routesObj } from '../../utils/routes'
// import images from '../../assets/images'
// import iconQr from '../../assets/images/qr.svg'

const Index = () => {
  const navigate = useNavigate()
  const [formLogin] = Form.useForm()
  const [methodLogin, setMethodLogin] = useState<number>(1)
  const [showHowToScan, setShowHowToScan] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div
      style={{
        backgroundColor: '#ee4d2d'
      }}
    >
      <Flex className='login-container' justify={'flex-end'} align={'center'}>
        {methodLogin === 2 && showHowToScan ? (
          <Flex className='content how-to-scan' align={'center'} vertical={true}>
            <svg
              fill='none'
              viewBox='0 0 11 11'
              className='PqxwIH'
              onClick={() => {
                setShowHowToScan(false)
              }}
            >
              <path
                fill='#757575'
                stroke='#757575'
                stroke-width='.5'
                d='M6.677 6l4.183-4.182a.48.48 0 00-.677-.678L6 5.323 1.817 1.14a.479.479 0 10-.677.678L5.323 6 1.15 10.172a.479.479 0 00.677.677L6 6.677l4.172 4.172a.479.479 0 10.677-.677L6.677 6z'
              ></path>
            </svg>
            <div className='how-to-scan-header'>
              <span>Làm thế nào để quét mã</span>
            </div>
            <img className='img-how-to-scan' src={howToScan}></img>
            <div>Nhấn vào biểu tượng quét mã trên ứng dụng Shopee để mở trình quét mã QR</div>
          </Flex>
        ) : (
          <></>
        )}

        <Flex className='content' align={'center'} vertical={true}>
          <div className={methodLogin === 1 ? 'content-header' : 'content-header content-header-qr'}>
            <h2>{methodLogin === 1 ? 'Đăng nhập' : 'Đăng nhập với mã QR'}</h2>
            <div className={methodLogin === 1 ? 'change-login-method' : 'change-login-method qr'}>
              <Tooltip
                className='tooltip-qr'
                zIndex={0}
                title={methodLogin === 1 ? 'Đăng nhập với mã QR' : 'Đăng nhập với mật khẩu'}
                open={true}
                placement='left'
                color='#fefaec'
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                getPopupContainer={(node: any) => {
                  return node?.parentNode
                }}
              >
                <span
                  style={{ display: 'block', cursor: 'pointer' }}
                  onClick={() => setMethodLogin(methodLogin === 1 ? 2 : 1)}
                >
                  {methodLogin === 1 ? (
                    <svg width='40' height='40' fill='none' className='Gcv8A_ icon-qr'>
                      <g clipPath='url(#clip0)'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z'
                          fill='#EE4D2D'
                        />
                        <path d='M37 37H22.5v3H40V22.5h-3V37z' fill='#EE4D2D' />
                        <path
                          d='M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z'
                          fill='#EE4D2D'
                        />
                        <path fill='#fff' d='M-4.3 4l44 43.9-22.8 22.7-43.9-44z' />
                      </g>
                      <defs>
                        <clipPath id='clip0'>
                          <path fill='#fff' d='M0 0h40v40H0z' />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg width='40' height='40' fill='none' className='Gcv8A_'>
                      <g clip-path='url(#clip0)'>
                        <rect x='1.5' y='1.5' width='37' height='28' rx='2.5' stroke='#EE4D2D' stroke-width='3'></rect>
                        <path stroke='#EE4D2D' stroke-width='3' d='M22 38.5h11'></path>
                        <path stroke='#EE4D2D' stroke-width='10' d='M21 29v9'></path>
                        <path fill='#fff' d='M-12.28 0l43.933 43.933-22.72 22.72L-35 22.72z'></path>
                        <path
                          d='M10.997 16.545l-2.76-.782.519-1.591 2.733 1.098-.176-3.067h1.723l-.176 3.129 2.663-1.081.519 1.608-2.813.783 1.846 2.338-1.397.993-1.6-2.567-1.582 2.479-1.397-.95 1.898-2.39zm8.156 0l-2.76-.782.52-1.591 2.732 1.098-.175-3.067h1.722l-.175 3.129 2.663-1.081.518 1.608-2.812.783 1.845 2.338-1.397.993-1.6-2.567-1.582 2.479-1.397-.95 1.898-2.39zm8.157 0l-2.76-.782.518-1.591 2.734 1.098-.176-3.067h1.723l-.176 3.129 2.663-1.081.519 1.608-2.813.783 1.846 2.338-1.398.993-1.6-2.567-1.581 2.479-1.398-.95 1.899-2.39z'
                          fill='#EE4D2D'
                        ></path>
                      </g>
                      <defs>
                        <clipPath id='clip0'>
                          <path fill='#fff' d='M0 0h40v40H0z'></path>
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </span>
              </Tooltip>
            </div>
          </div>
          {methodLogin === 1 ? (
            <div className='form-container'>
              <Form
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
                form={formLogin}
              >
                <Form.Item<loginReqBody>
                  name='emailOrUsernameOrPhoneNumber'
                  rules={[{ required: true, message: 'Vui lòng điền vào mục này' }]}
                >
                  <Input placeholder='Email/Số điện thoại/Tên đăng nhập' />
                </Form.Item>

                <Form.Item<loginReqBody>
                  name='password'
                  rules={[{ required: true, message: 'Vui lòng điền vào mục này' }]}
                >
                  <Input.Password placeholder='Mật khẩu' />
                </Form.Item>

                <Form.Item className='button-wrapper'>
                  <Button type='primary' htmlType='submit'>
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
              <div className='forgot-password'>
                <a href=''>Quên mật khẩu</a>
                <a href=''>Đăng nhập với SMS</a>
              </div>
              <Divider plain>HOẶC</Divider>
              <div className='button-social'>
                <Button>
                  <span className='icon'>icon-</span>
                  <span>Facebook</span>
                </Button>
                <Button>
                  <span className='icon'>icon-</span>
                  <span>Google</span>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className='qr-container'>
                <img src={qrLogin} alt='' />
                <h2>Quét mã QR bằng ứng dụng Shopee</h2>
                <button
                  onClick={() => {
                    setShowHowToScan(!showHowToScan)
                  }}
                >
                  Làm thế nào để quét mã
                </button>
              </div>
            </>
          )}

          <div className='signup'>
            <span>Bạn mới biết đến Shopee? </span>
            <span
              onClick={() => {
                navigate(routesObj.register)
              }}
            >
              Đăng ký
            </span>
          </div>
        </Flex>
      </Flex>
    </div>
  )
}

export default Index
