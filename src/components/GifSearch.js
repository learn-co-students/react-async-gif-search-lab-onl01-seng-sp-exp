import React from 'react'

class GifSearch extends React.Component {
	state = {
		searchValue: ""
	}

	handleSearchChange = (event) => {
		this.setState({
			searchValue: event.target.value
		})
	}


	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.state.searchValue)}>
					<div className="form-group">
						<label>Enter a Search Term:</label>
						<br />
						<input
							id="search"
							type="text"
							name="search"
							onChange={event => this.handleSearchChange(event)}
							value={this.state.searchValue}
						/>
					</div>
					<button type="submit" className="button-primary">
					Find My Gifs
					</button>
				</form>
			</div>
		)
	}
}

export default GifSearch