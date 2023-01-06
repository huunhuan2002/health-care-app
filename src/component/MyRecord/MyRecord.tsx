import React, { useEffect, useState } from "react";
import SeeMoreButton from "../SeeMoreButton";
import './MyRecord.scss';

const MyRecord = () => {
  const [recommend, setRecommend] = useState(Array<any>);

  const [exercise, setExcercise] = useState(Array<any>);

  const [diary, setDiary] = useState(Array<any>);

  useEffect(() => {
    const recommendList = [
      {
        imageName: 'MyRecommend-1.jpg',
        title: 'BODY RECORD',
        tag: '自分のカラダの記録',
      },
      {
        imageName: 'MyRecommend-2.jpg',
        title: 'MY EXERCISE',
        tag: '自分のカラダの記録',
      },
      {
        imageName: 'MyRecommend-3.jpg',
        title: 'MY DIARY',
        tag: '自分の日記',
      },
    ];

    const excerciseList = Array(20).fill(0).map(() => {
      return {
        name: '家事全般（立位・軽い）',
        kalo: '26kcal',
        time: '10 min',
      };
    });

    const diaryList = Array(8).fill(0).map(() => ({
      date: '2021.05.21',
      time: '23:25',
      content: `私の日記の記録が一部表示されます。
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
    }));

    setRecommend(recommendList);

    setExcercise(excerciseList);

    setDiary(diaryList);
  }, []);

  return (
    <div className="record">
      <div className="recommend">
        {
          recommend.map((item: any, index: number) => (
            <div className="img-card" key={index}>
              <img src={`image/${item.imageName}`} alt="recommend" />
              <div className="detail">
                <div className="label">{ item.title }</div>
                <div className="tag">{ item.tag }</div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="chart">
        <img src="/image/chart2.png" alt="chart" />
      </div>
      <div className="exercise">
        <div className="title">
          <div className="label">MY EXERCISE</div>
          <div className="date">2021.05.21</div>
        </div>
        <div className="list">
        {
              exercise.map((item: any, index: number) => (
                <div className="row" key={index}>
                  <div className="list--item">
                    <div className="dot">●</div>
                    <div className="gold">
                      <div className="name">{ item.name }</div>
                      <div className="kalo">{ item.kalo }</div>
                    </div>
                    <div className="time">{ item.time }</div>
                  </div>
                  <div className="list--item">
                    <div className="dot">●</div>
                    <div className="gold">
                      <div className="name">{ item.name }</div>
                      <div className="kalo">{ item.kalo }</div>
                    </div>
                    <div className="time">{ item.time }</div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
      <div className="diary">
        <div className="title">MY DIARY</div>
        <div className="list">
          {
            diary.map((item: any, index: number) => (
              <div className="list--item" key={index}>
                <div className="date-time">
                  <div className="date">{ item.date }</div>
                  <div className="time">{ item.time }</div>
                </div>
                <div className="content">
                  { item.content }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <SeeMoreButton />
    </div>
  )
}

export default MyRecord;
