import { Flex } from 'antd';
import { useLocation, Link } from 'react-router-dom';

import '../../assets/Header/header.scss';
import { publicRoutes } from '../../routes/routes';

import Logo from './logo';


const HeaderComponent = () => {
    const location = useLocation().pathname;

    return (
        <div className="container">
            <Flex gap="small" wrap="wrap" align="center" className="header-wrapper">
                <Logo/>
                <h1 className="page-title">
                    {publicRoutes.map((route, index) => (
                        <span key={index}>{location === route.path && route.title}</span>
                    ))}
                </h1>
                <Link to="/portal" className="support">
                    <span className='label'>Bạn cần giúp đỡ?</span>
                    <span className='icon'><svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path fillRule="evenodd" clipRule="evenodd" d="M20.5 12a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zm1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-10.783 1.02c-.16.379-.24.888-.24 1.526h1.65c.01-.691.175-1.217.494-1.577l.894-.871c.737-.759 1.105-1.53 1.105-2.312 0-.878-.274-1.562-.821-2.052-.543-.49-1.301-.734-2.275-.734-.945 0-1.705.247-2.282.741-.572.495-.862 1.167-.872 2.017h1.766c0-.399.126-.713.378-.944.257-.235.593-.352 1.01-.352.436 0 .766.12.988.36.228.235.342.578.342 1.03 0 .34-.097.657-.29.95-.127.192-.427.516-.902.972-.47.451-.785.866-.945 1.245zm-.094 3.081c-.18.173-.269.401-.269.684 0 .264.085.485.254.663.175.177.422.266.742.266s.566-.089.74-.266a.908.908 0 00.263-.663.912.912 0 00-.27-.677c-.179-.182-.423-.273-.733-.273-.306 0-.548.089-.727.266z" fill="currentColor"></path></svg></span>
                </Link>
                
            </Flex>
        </div>
    )
};

export default HeaderComponent;
