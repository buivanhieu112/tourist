import React from 'react';
import Grid from './Grid';

import logo from '../assets/images/Logo-2.jpg';
import { Link } from 'react-router-dom';

const footerAboutLinks = [
  {
    display: 'Tour trong nước',
    path: '/about',
  },
  {
    display: 'Tour nước ngoài',
    path: '/about',
  },
  {
    display: 'Vé may bay',
    path: '/about',
  },
  {
    display: 'Thuê xe',
    path: '/about',
  },
];

function Footer() {
  return (
    <div className="footers">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footers__title">DU LỊCH HV TOURIST</div>
            <div className="footers__content">
              <p>
                Chuyên thiết kế tour du lịch theo yêu cầu. Nhóm 8 người trở lên
                có thể làm 1 tour riêng.
              </p>
              <p>Chuyên tour vé lẻ trong nước.</p>
              <p>
                Nhận thiết kế, tổ chức sự kiện, chương trình teambuilding,...
              </p>
              <p>Cho thuê xe khách từ 4 - 45 chỗ</p>
            </div>
          </div>
          <div>
            <div className="footers__title">Dịch vụ</div>
            <div className="footers__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footers__title">LIÊN HỆ</div>
            <div className="footers__content">
              <p>Địa chỉ: số 4, Nguyễn Văn Bảo, P.4, Gò Vấp, TP.HCM.</p>
              <p>Văn phòng: 0123456789</p>
              <p>Hotline công ty/ Zalo: 0123456789</p>

              <p>Email: hvtourist@gmail.com</p>
            </div>
          </div>
          <div className="footers__about">
            <p>
              <Link to="/">
                <img src={logo} className="footers__logo" alt="" />
              </Link>
            </p>
            <p>
              Lữ hành HV Tourist, thương hiệu lữ hành hàng đầu Việt Nam. Thương
              hiệu quốc gia.
            </p>
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
