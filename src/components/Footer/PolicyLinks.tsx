import { Link } from "react-router-dom";

const policyData = [
    {
        title: "CHÍNH SÁCH BẢO MẬT",
        links: "/"
    },
    {
        title: "QUY CHẾ HOẠT ĐỘNG",
        links: "/"
    },
    {
        title: "CHÍNH SÁCH VẬN CHUYỂN",
        links: "/"
    },
    {
        title: "CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN",
        links: "/"
    }
]

const PolicyLinks = () => {
    return (
        <ul className="copyright-links policy-items">
            {policyData.map((item, index) => {
                return (
                    <li key={index}><Link to={item.links}>{item.title}</Link></li>
                )
            })}
        </ul>
    )
};

export default PolicyLinks;
