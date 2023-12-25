import { Flex } from "antd";
import { Link } from "react-router-dom";

const countries = [
    {
        name: "Singapore",
        site: "/"
    },
    {
        name: "Indonesia",
        site: "/"
    },
    {
        name: "Thái Lan",
        site: "/"
    },
    {
        name: "Malaysia",
        site: "/"
    },    {
        name: "Việt Nam",
        site: "/"
    },
    {
        name: "Philippines",
        site: "/"
    },
    {
        name: "Brazil",
        site: "/"
    },    {
        name: "México",
        site: "/"
    },
    {
        name: "Colombia",
        site: "/"
    },
    {
        name: "Chile",
        site: "/"
    },
    {
        name: "Đài Loan",
        site: "/"
    }
]

const Copyright = () => {
    const year = new Date().getFullYear();

    return (
        <Flex align="center">
            <div>© {year} Shopee. Tất cả các quyền được bảo lưu.</div>
            <div className="countries-wrapper">
                <span className="label">Quốc gia và khu vực: </span>

                <ul className="copyright-links country-items">
                    {countries.map((country) => {
                        return (
                            <li><Link to={country.site}>{country.name}</Link></li>
                        )
                    })}
                </ul>
            </div>
        </Flex>
    )
};

export default Copyright;
