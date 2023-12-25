import { List } from 'antd';
import { Link } from 'react-router-dom';

interface Image {
    src: string;
    alt?: string;
}

interface Link {
    title: string;
    path: string;
    icon: Image;
}

interface QuickLinksProps {
    data: Link[];
    headerLink?: string;
}

const QuickLinks = ({
    data,
    headerLink
}: QuickLinksProps) => {
    return (
        <div>
            <div className='footer-header'>{headerLink}</div>
            <List
            style={{borderBottom:'none'}}
            dataSource={data}
            renderItem={(item) => {
                return (
                    <List.Item style={{borderBottom:'none'}}>
                        <Link to={item.path}>
                            <span className='item-icon'><img src={item.icon.src} alt={item.icon.alt} /></span>
                            {item.title}
                        </Link>
                    </List.Item>
                )
            }}
            />
        </div>
    )
};

export default QuickLinks;
