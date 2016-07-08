/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// http://i.imgur.com/UePbdph.jpg
// https://facebook.github.io/react/img/logo_og.png

//  The resource could not be loaded because the App Transport Security policy requires the use of a secure connection.


 // var MOCKED_MOVIES_DATA = [{
 //  title: 'Title',
 //  year: '2015',
 //  posters: {
 // 	 thumbnail: 'https://facebook.github.io/react/img/logo_og.png'
 //  }
 // }];

 /**
 * For quota reasons we replaced the Rotten Tomatoes' API with a sample data of
 * their very own API that lives in React Native's Github repo.
 */
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


import React, { Component } from 'react';
import {
	AppRegistry,
	Image,
	StyleSheet,
	Text,
	View
} from 'react-native';

class SampleAppMovies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: null
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		fetch(REQUEST_URL)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					movies: responseData.movies
				})
			})
			.done();
	}

	render() {
		if ( ! this.state.movies) {
			return this.renderLoadingView();
		}

		var movie = this.state.movies[0];
		console.log(movie.posters.thumbnail);
		return this.renderMovie(movie);
	}

	renderLoadingView() {
		return (
			<View style={styles.container}>
				<Text>
					Loading movies...
				</Text>
			</View>
		)
	}

	renderMovie(movie) {
		return (
			<View style={styles.container}>
				<Image
					style={styles.thumbnail}
					source={{uri: movie.posters.thumbnail}}
					onError={(e) => console.log(e.nativeEvent.error) }
				/>
				<View style={styles.rightContainer}>
					<Text style={styles.title}>{movie.title}</Text>
					<Text style={styles.year}>{movie.year}</Text>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},

	thumbnail: {
		width: 100,
		height: 100
	},

	rightContainer: {
		flex: 1
	},

	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center'
	},

	year: {
		textAlign: 'center'
	}


});

AppRegistry.registerComponent('SampleAppMovies', () => SampleAppMovies);
