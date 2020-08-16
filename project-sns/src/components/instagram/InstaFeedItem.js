import React, { Component } from "react";

class InstaFeedItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.data !== nextProps.data) {
			return true;
		} else return false;
	}

	render() {
		const { owner, title, date, link, img, video, alt, like } = this.props.data;
		return (
			<div className='myfeedItem'>
				<a href={link}>
					<div className='myfeedTop'>
						<p className='myfeedOwner'>{owner}</p>
						<p className='myfeedDate'>{date}</p>
					</div>
					<div className='myfeedCont'>
							<span className='myfeedMedia'>
								{!img == "" && <img src={img} alt={alt} />}
								{!video == "" && <video src={video} title={alt} playsInline autoPlay />}
							</span>
						<p className='myfeedLike'>좋아요 {like} 개</p>
						<p className='myfeedTitle'>{title}</p>
					</div>
				</a>
			</div>
		);
	}
}

export default InstaFeedItem;
