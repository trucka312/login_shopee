import { List } from 'antd';

interface Images {
    src: string;
    alt?: string;
}

interface ListImagesProps {
    listImages: Images[];
    headerList?: string;
    className?: string;
}

const ListImages = ({
    listImages, 
    headerList
}: ListImagesProps) => {
    return (
        <>
            <div className='footer-header'>{headerList}</div>
            <List
                className='list-image'
                grid={{ column: 3 }}
                dataSource={listImages}
                renderItem={(item) => (
                <List.Item>
                    <img src={item.src} alt={item.alt} />
                </List.Item>
                )}
            />
        </>
    )
};

export default ListImages;
