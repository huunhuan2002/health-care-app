import React, { useState, useEffect } from "react";
import SeeMoreButton from "../SeeMoreButton";

import './Home.scss';

const Home = () => {
	const [topicList, setTopicList] = useState(Array<any>);

	const [recommendList, setRecommendList] = useState(Array<any>);

	useEffect(() => {
		const topics = Array(8).fill(0).map((_, index) => {
			return {
				imageName: `column-${index + 1}.jpg`,
				title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
				tag: '#魚料理  #和食  #DHA',
			}
		});
	
		const recommends = [
			{
				title: 'RECOMMENDED COLUMN',
				tag: 'オススメ'
			},
			{
				title: 'RECOMMENDED DIET',
				tag: 'ダイエット'
			},
			{
				title: 'RECOMMENDED BEAUTY',
				tag: '美容'
			},
			{
				title: 'RECOMMENDED HEALTH',
				tag: '健康'
			},
		];

		setTopicList(topics);
		setRecommendList(recommends);
	}, []);

	return (
		<div className="home">
			<div className="recommend">
				{
					recommendList.map((item: any, index: number) => (
						<div className="recommend--item" key={index}>
							<div className="title">{ item.title }</div>
							<div className="line"></div>
							<div className="tag">{ item.tag }</div>
						</div>
					))
				}
			</div>
			<div className="topic">
				{
					topicList.map((topic: any, index: number) => (
						<div className="topic--item" key={index}>
							<img src={`image/${topic.imageName}`} alt="imageTopic" />
							<div className="title">{ topic.title }</div>
							<div className="tag">{ topic.tag }</div>
						</div>
					))
				}
			</div>
			<SeeMoreButton />
		</div>
  )
}

export default Home;
