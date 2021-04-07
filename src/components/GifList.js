import React from 'react'

class GifList extends React.Component {

	makeGifList = () => {
		return this.props.gifList.map((gif, key) => (
				<li className='gif-list-item'>
					<img key={key} src={gif.images.original.url} alt="gif"></img>
				</li>
			))
	}


	render() {
		return (
			<div>
				<ul className ='gif-list'>{this.makeGifList()}</ul>
			</div>
		)
	}	

}

export default GifList