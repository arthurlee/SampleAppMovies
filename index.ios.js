/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// http://i.imgur.com/UePbdph.jpg
// https://facebook.github.io/react/img/logo_og.png

 var MOCKED_MOVIES_DATA = [{
	 title: 'Title',
	 year: '2015',
	 posters: {
		 thumbnail: 'https://facebook.github.io/react/img/logo_og.png'
	 }
 }];

import React, { Component } from 'react';
import {
	AppRegistry,
	Image,
	StyleSheet,
	Text,
	View
} from 'react-native';

class SampleAppMovies extends Component {
	render() {
		var movie = MOCKED_MOVIES_DATA[0];

		return (
			<View style={styles.container}>
				<Image style={styles.thumbnail} source={{uri: movie.posters.thumbnail}} />
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
