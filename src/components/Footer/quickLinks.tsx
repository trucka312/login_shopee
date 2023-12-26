import { List } from 'antd';
import { Link } from 'react-router-dom';

interface Link {
    title: string;
    path: string;
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
