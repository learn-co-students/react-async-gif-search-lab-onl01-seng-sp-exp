import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
	state = {
		gifs: [],
	}


	getGifs = (query) => {
		fetch(
			`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=VvJnvP23D9Wkv7tFJLGcA6C0xJXplLqm&rating=g`
		)
		.then(response => response.json())
		.then(json => {
			this.setState({
				gifs: json.data.slice(0, 3)

			})
		})
	}

	handleSubmit = (query) => (event) => {
		event.preventDefault()
		this.getGifs(query)
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<GifSearch handleSubmit = {this.handleSubmit} />
					<GifList gifList = {this.state.gifs} />
 				</div>
			</div>
		)
	}
}

export default GifListContainer;