import React, { Component } from "react";
import axios from "axios";
import Masonry from 'react-masonry-component';
import YoutubeItem from "./YoutubeItem";
import "./YoutubeList.css";

const masonryOptions = {
	transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class YoutubeList extends Component {
	state = {
		loading: false,
		youtubeDatas: null,
	};

	getData = async () => {
		try {
			this.setState({
				loading: true,
			});

			const response = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLb1jnpdlalE3wHJku6YPk90Q-U5p1_fxZ&maxResults=50&key=AIzaSyC3dYrIaoJUiV8HSSeJvje5ZPOB0zQPVLs");

			this.setState({
				youtubeDatas: response.data.items,
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
		if (this.props.youtubeDatas !== prevProps.youtubeDatas) {
			this.getData();
		}
	}

	render() {
		const { youtubeDatas, loading } = this.state;
		return (
			<section className='projectSection'>
				<div className='sectionTitle'>
					<h2>Youtube</h2>
				</div>
				{loading && <h3 className='myfeedInfotxt'>데이터 로딩 중 입니다:D</h3>}
				<Masonry
						className={'myYoutubeList'}
						elementType={'ul'}
						options={masonryOptions}
						imagesLoadedOptions={imagesLoadedOptions}
				>
					{!loading &&
						youtubeDatas &&
						!youtubeDatas.error &&
						youtubeDatas.map((d) => (
							<li>
								<YoutubeItem key={d.position} owner={d.snippet.channelTitle} title={d.snippet.title} description={d.snippet.description} thumbnail={d.snippet.thumbnails.standard.url} videoId={d.snippet.resourceId.videoId} />
							</li>
						))}
				</Masonry>
			</section>
		);
	}
}

export default YoutubeList;
