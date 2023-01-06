import React, { useEffect, useState } from "react";
import './Header.scss';

const Header = () => {
  const [navItems, setNavItems] = useState(Array<any>);

  useEffect(() => {
    const navList = [
      {
        icon: 'icon_memo.svg',
        label: '自分の記録',
        link: '/my-record',
      },
      {
        icon: 'icon_challenge.svg',
        label: 'チャレンジ',
        link: '',
      },
      {
        icon: 'icon_info.svg',
        label: 'お知らせ',
        link: '',
      },
      {
        icon: 'icon_menu.svg'
      }
    ];

    setNavItems(navList);
  }, []);

  return (
    <div className="header">
      <div className="left">
        <div className="logo">
          <img src="/image/logo.svg" alt="logo" />
        </div>
      </div>
      <div className="right">
        <div className="list">
          {
            navItems.map((item: any, index: number) => (
              <div className="list--item" key={index}>
                <div className="icon">
                  <img src={`/image/${item.icon}`} alt="icon" />
                </div>
                <div className="label">{ item.label }</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Header;
