import React, { useEffect, useState } from "react";
import './Footer.scss';

const Footer = () => {
  const [list, setList] = useState(Array<any>);

  useEffect(() => {
    const list = ['会員登録', '運営会社', '利用規約', '個人情報の取扱について', '特定商取引法に基づく表記', 'お問い合わせ'];

    setList(list);
  }, []);

  return (
    <div className="footer">
      <div className="list">
        {
          list.map((item: string, index: number) => (
            <div className="list--item" key={index}>{ item }</div>
          ))
        }
      </div>
    </div>
  )
}

export default Footer;
