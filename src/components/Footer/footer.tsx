import { Flex } from 'antd';
import { Divider } from 'antd';

import '../../assets/Footer/footer.scss';

import QuickLinks from '../../components/Footer/quickLinks';
import QuickLinksImage from '../../components/Footer/quickLinksImage';
import ListImage from '../../components/Footer/listImages';
import AppDownload from './appDownload';
import CopyRight from './copyRight';
import PolicyLinks from './PolicyLinks'
import InformationCompany from './informationCompany';

import Visa from '../../../public/payment/visa.png';
import MasterCard from '../../../public/payment/mastercard.png';
import JCB from '../../../public/payment/jcb.png';
import ShopeePay from '../../../public/payment/shopeepay.png';
import SPayLater from '../../../public/payment/spaylater.png';
import TG0 from '../../../public/payment/TG0.png';
import COD from '../../../public/payment/cod.png';
import American from '../../../public/payment/american.png';

import GHN from '../../../public/shipping/ghn.png';
import GHTK from '../../../public/shipping/ghtk.png';
import SXP from '../../../public/shipping/sxp.png';
import VTPost from '../../../public/shipping/vtp.png';
import VNPost from '../../../public/shipping/VNPost.png';
import Grab from '../../../public/shipping/Grab.png';
import JT from '../../../public/shipping/J&T.png';
import Aha from '../../../public/shipping/aha.png';
import Be from '../../../public/shipping/be.png';
import Best from '../../../public/shipping/best.png';
import Ninjavan from '../../../public/shipping/ninjavan.png';

import Facebook from '../../../public/socials/facebook.png';
import Instagram from '../../../public/socials/instagrma.png';
import LinkedIn from '../../../public/socials/linkedin.png';

import QRCode from '../../../public/app-dowload/qr-app.png';
import AppStore from '../../../public/app-dowload/app-store.png';
import GGPlay from '../../../public/app-dowload/google-play.png';
import Gallery from '../../../public/app-dowload/app-gallery.png';

const dataCustomerCare = [
    {
        title: 'Trung tâm trợ giúp',
        path: '/'
    },
    {
        title: 'Shopee blog',
        path: '/'
    },
    {
        title: 'Shopee mall',
        path: '/'
    },
    {
        title: 'Hướng dẫn mua hàng',
        path: '/'
    },
    {
        title: 'Hướng dẫn bán hàng',
        path: '/'
    }
];

const dataAboutShopee = [
    {
        title: 'Giới thiệu về Shopee Việt Nam',
        path: '/'
    },
    {
        title: 'Tuyển dụng',
        path: '/'
    },
    {
        title: 'Điều khoản Shopee',
        path: '/'
    },
    {
        title: 'Chính sách bảo mật',
        path: '/'
    }
];

const dataPayment = [
    {
        src: Visa,
        alt: 'Visa'
    },
    {
        src: MasterCard,
        alt: 'MasterCard'
    },
    {
        src: JCB,
        alt: 'JCB'
    },
    {
        src: American,
        alt: 'American'
    },
    {
        src: COD,
        alt: 'COD'
    },
    {
        src: TG0,
        alt: 'TG0'
    },
    {
        src: ShopeePay,
        alt: 'ShopeePay'
    },
    {
        src: SPayLater,
        alt: 'SPayLater'
    },
];

const dataShipping = [
    {
        src: GHN,
        alt: 'GHN'
    },
    {
        src: GHTK,
        alt: 'GHTK'
    },
    {
        src: SXP,
        alt: 'SXP'
    },
    {
        src: VTPost,
        alt: 'VTPost'
    },
    {
        src: VNPost,
        alt: 'VNPost'
    },
    {
        src: JT,
        alt: 'J&T'
    },
    {
        src: Grab,
        alt: 'Grab'
    },
    {
        src: Ninjavan,
        alt: 'Ninjavan'
    },
    {
        src: Best,
        alt: 'Best'
    },
    {
        src: Be,
        alt: 'Be'
    },
    {
        src: Aha,
        alt: 'Aha'
    }
];

const dataSocial = [
    {
        title: 'Facebook',
        path: '/',
        icon: {
            src: Facebook
        }
    },
    {
        title: 'Instagram',
        path: '/',
        icon: {
            src: Instagram
        }
    },
    {
        title: 'LinkedIn',
        path: '/',
        icon: {
            src: LinkedIn
        }
    },
];

const DataQrCode = {
    src: QRCode,
    alt: 'QRCode',
    path: '/'
};

const dataDownload = [
    {
        src: AppStore,
        alt: 'AppStore',
        path: '/'
    },
    {
        src: GGPlay,
        alt: 'GGPlay',
        path: '/'
    },
    {
        src: Gallery,
        alt: 'Gallery',
        path: '/'
    }
]

const FooterComponent = () => {
    return (
        <div className="container">
            <Flex gap="50px" className="footer-wrapper">
                <QuickLinks data={dataCustomerCare} headerLink="CHĂM SÓC KHÁCH HÀNG" />
                <QuickLinks data={dataAboutShopee} headerLink="VỀ SHOPEE" />
                <div className='image-wrapper'>
                    <ListImage listImages={dataPayment} headerList="THANH TOÁN" />
                    <div className='shipping-wrapper'><ListImage listImages={dataShipping} headerList="ĐƠN VỊ VẬN CHUYỂN" /></div>
                </div>

                <QuickLinksImage data={dataSocial} headerLink="THEO DÕI CHÚNG TÔI" />

                <AppDownload qrCode={DataQrCode} listApp={dataDownload} header="TẢI ỨNG DỤNG SHOPEE NGAY THÔI" />
            </Flex>

            <Divider />

            <CopyRight/>

            <PolicyLinks/>

            <InformationCompany/>
        </div>
    )
};

export default FooterComponent;
