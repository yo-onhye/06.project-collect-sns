import React, { Component } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-component';
import InstaFeedItem from "./InstaFeedItem";

const masonryOptions = {
	transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class InstaFeedList extends Component {
	state = {
		loading: false,
		instaDatas: null,
	};

	getData = async () => {
		try {
			this.setState({
				loading: true,
			});

			const response = await axios.get('https://yo-onhye.github.io/00.temp/json/InstagramDatas.json');

			this.setState({
				instaDatas: response.data,
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
			this.props.instaDatas !== prevProps.instaDatas
		) {
			this.getData();
		}
	}

	render() {
		const { instaDatas, loading } = this.state;
		return (
			<section className="projectSection">
				<div className="sectionTitle">
					<h2>Instargram</h2>
				</div>
				{loading && <h3 className="myfeedInfotxt">데이터 로딩 중 입니다:D</h3>}
				<Masonry
						className={'myfeedList'}
						elementType={'ul'}
						options={masonryOptions}
						imagesLoadedOptions={imagesLoadedOptions}
				>
					{!loading &&
						instaDatas &&
						!instaDatas.error &&
						instaDatas.data.map(d => <li><InstaFeedItem key={d.id} data={d} /></li>)}
				</Masonry>
			</section>
		);
	}
}

export default InstaFeedList;