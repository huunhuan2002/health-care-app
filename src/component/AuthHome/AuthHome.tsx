import React, { useState, useEffect } from 'react';
import SeeMoreButton from '../SeeMoreButton';

import './AuthHome.scss';

const AuthHome = () => {
  const [ buttons, setButtons ] = useState(Array<any>);

  const [histories, setHistories] = useState(Array<any>);

  useEffect(() => {
    const buttonList = Array(4).fill(0).map((_, index) => (`component_hex-${index + 1}.svg`));

    const historyList = [
      {
        imageName: 'm01.jpg',
        label: '05.21.Morning',
      },
      {
        imageName: 'l03.jpg',
        label: '05.21.Lunch',
      },
      {
        imageName: 'd01.jpg',
        label: '05.21.Dinner',
      },
      {
        imageName: 'l01.jpg',
        label: '05.21.Snack',
      },
      {
        imageName: 'm01.jpg',
        label: '05.20.Morning',
      },
      {
        imageName: 'l02.jpg',
        label: '05.20.Lunch',
      },
      {
        imageName: 'd02.jpg',
        label: '05.20.Dinner',
      },
      {
        imageName: 's01.jpg',
        label: '05.20.Snack',
      }
    ]

    setButtons(buttonList);

    setHistories(historyList);
  }, []);

  return (
    <div className='auth-home'>
      <div className="header-wrapper">
        <div className="archivement">
          <img src="/image/d01.jpg" alt="archivement" />
        </div>
        <div className="chart">
          <img src="/image/chart1.png" alt="chart" />
        </div>
      </div>
      <div className="button">
        {
          buttons.map((item: string, index: number) => (
            <img src={`/image/${item}`} alt="button" key={index} />
          ))
        }
      </div>
      <div className="history">
        {
          histories.map((item: any, index: number) => (
            <div className="img-card" key={index}>
              <img src={`/image/${item.imageName}`} alt="morning" />
              <div className="label">{ item.label }</div>
            </div>
          ))
        }
      </div>
      <SeeMoreButton />
    </div>
  )
}

export default AuthHome;
