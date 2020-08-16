import React, { Component } from "react";
import axios from 'axios';
import Masonry from 'react-masonry-component';
import TwitterFeedItem from "./TwitterFeedItem";

const masonryOptions = {
	transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class TwitterFeedList extends Component {
	state = {
		loading: false,
		tiwitterDatas: null,
	};

	getData = async () => {
		try {
			this.setState({
				loading: true,
			});

			const response = await axios.get('https://yo-onhye.github.io/00.temp/json/TwitterDatas.json');

			this.setState({
				tiwitterDatas: response.data,
			});

		} catch (e) {
			console.error(e);
		}
		this.setState({
			loading: false,
		});
	};

	componentDidMount() {
		this.getData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			this.props.tiwitterDatas !== prevProps.tiwitterDatas
		) {
			this.getData();
		}
	}

	render() {
		const { tiwitterDatas, loading } = this.state;
		return (
			<section className='projectSection'>
				<div className='sectionTitle'>
					<h2>Twitter</h2>
				</div>
				{loading && <h3 className="myfeedInfotxt">데이터 로딩 중 입니다:D</h3>}
				<Masonry
						className={'myfeedList'}
						elementType={'ul'}
						options={masonryOptions}
						imagesLoadedOptions={imagesLoadedOptions}
				>
					{!loading &&
					tiwitterDatas &&
					!tiwitterDatas.error &&
					tiwitterDatas.data.map(d => <li><TwitterFeedItem key={d.id} data={d} /></li>)}
				</Masonry>
			</section>
		);
	}
}

export default TwitterFeedList;
