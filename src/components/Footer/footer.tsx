import { Flex } from 'antd';
import { Divider } from 'antd';

import '../../assets/styles/Footer/footer.scss';

import QuickLinks from '../../components/Footer/quickLinks';
import QuickLinksImage from '../../components/Footer/quickLinksImage';
import ListImage from '../../components/Footer/listImages';
import AppDownload from './appDownload';
import CopyRight from './copyRight';
import PolicyLinks from './PolicyLinks'
import InformationCompany from './informationCompany';

import Visa from '../../../public/images/payment/visa.png';
import MasterCard from '../../../public/images/payment/mastercard.png';
import JCB from '../../../public/images/payment/jcb.png';
import ShopeePay from '../../../public/images/payment/shopeepay.png';
import SPayLater from '../../../public/images/payment/spaylater.png';
import TG0 from '../../../public/images/payment/TG0.png';
import COD from '../../../public/images/payment/cod.png';
import American from '../../../public/images/payment/american.png';

import GHN from '../../../public/images/shipping/ghn.png';
import GHTK from '../../../public/images/shipping/ghtk.png';
import SXP from '../../../public/images/shipping/sxp.png';
import VTPost from '../../../public/images/shipping/vtp.png';
import VNPost from '../../../public/images/shipping/VNPost.png';
import Grab from '../../../public/images/shipping/Grab.png';
import JT from '../../../public/images/shipping/J&T.png';
import Aha from '../../../public/images/shipping/aha.png';
import Be from '../../../public/images/shipping/be.png';
import Best from '../../../public/images/shipping/best.png';
import Ninjavan from '../../../public/images/shipping/ninjavan.png';

import Facebook from '../../../public/images/socials/facebook.png';
import Instagram from '../../../public/images/socials/instagrma.png';
import LinkedIn from '../../../public/images/socials/linkedin.png';

import QRCode from '../../../public/images/app-dowload/qr-app.png';
import AppStore from '../../../public/images/app-dowload/app-store.png';
import GGPlay from '../../../public/images/app-dowload/google-play.png';
import Gallery from '../../../public/images/app-dowload/app-gallery.png';

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
