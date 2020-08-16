import React, { Component } from "react";

class TwitterFeedItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.data !== nextProps.data) {
			return true;
		} else return false;
	}

	render() {
		const { owner, title, profile, date, link, img, alt, like, retweet } = this.props.data;
		return (
			<div className='myfeedItem'>
				<a href={link}>
					<div className='myfeedTop'>
						<span className="myfeedProfile"><img src={profile} alt="" /></span>
						<p className='myfeedOwner'>{owner}</p>
						<p className='myfeedDate'>{date}</p>
					</div>
					<div className='myfeedCont'>
						<p className='myfeedTitle'>{title}</p>
							<span className='myfeedMedia'>
								<img src={img} alt={alt} />
							</span>
						<div className="myfeedCount">
							<span className="myfeedCountCell">좋아요 {like}</span>
							<span className="myfeedCountCell">리트윗 {retweet}</span>
						</div>
					</div>
				</a>
			</div>
		);
	}
}

export default TwitterFeedItem;
