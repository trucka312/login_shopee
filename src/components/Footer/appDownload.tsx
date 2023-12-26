import { Flex, List } from 'antd';
import { Link } from 'react-router-dom';

interface Images {
    src: string;
    alt?: string;
    path: string;
}

interface AppDownloadProps {
    listApp: Images[];
    header?: string;
    qrCode: Images;
}

const AppDownload = ({
    listApp, 
    header,
    qrCode
}: AppDownloadProps) => {
    return (
        <div className='list-image list-download-app'>
            <div className='footer-header'>{header}</div>
            <Flex gap="30px" className='list-app-download'>
                <Link to={qrCode.path} className='qrcode'><img src={qrCode.src} alt={qrCode.alt} /></Link>
                <List
                    dataSource={listApp}
                    renderItem={(item) => (
                    <List.Item>
                        <Link to={item.path}><img src={item.src} alt={item.alt} /></Link>
                    </List.Item>
                    )}
                />
            </Flex>
        </div>
    )
};

export default AppDownload;
