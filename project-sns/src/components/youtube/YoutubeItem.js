import React, { Component } from 'react';
import './YoutubeItem.css';

class YoutubeItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props !== nextProps) {
			return true;
		} else return false;
	}

	render() {
		const { owner, title, description, thumbnail, videoId } = this.props;
		const profile = "https://yt3.ggpht.com/a/AATXAJwozH_Of4LYYnDnKGO-f2Z3wvq_v8SSakh20Y598g=s176-c-k-c0x00ffffff-no-rj-mo";
		return (
			<div className="myYoutubeItem">
				<a href={`https://www.youtube.com/watch?v=${videoId}`}>
					<div className='myYoutubeTop'>
						<span className="myYoutubeProfile"><img src={profile} alt="" /></span>
						<p className='myYoutubeOwner'>{owner}</p>
					</div>
					<div className='myYoutubeCont'>
						<div className='myYoutubeMedia'>
							{!thumbnail == "" && <img src={thumbnail} alt="" />}
						</div>
						<p className='myYoutubeTitle'>{title}</p>
						<p className='myYoutubeDetail'>{description}</p>
					</div>
				</a>
			</div>
		);
	}
}

export default YoutubeItem;