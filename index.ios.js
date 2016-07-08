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
		    	<Text>{movie.title}</Text>
				<Text>{movie.year}</Text>
				<Image style={styles.thumbnail} source={{uri: movie.posters.thumbnail}} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	thumbnail: {
		width: 200,
		height: 200
	}

});

AppRegistry.registerComponent('SampleAppMovies', () => SampleAppMovies);
