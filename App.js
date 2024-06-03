import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons

const App = () => {
	const [numericValue, setNumericValue] = useState("");

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Example of Click on a View!!</Text>
			<Text style={styles.subHeaderText}>LONG PRESS THE BUTTON</Text>
			<TextInput
				style={styles.input}
				keyboardType="numeric"
				placeholder="Enter Numeric Values Only"
				value={numericValue}
				onChangeText={setNumericValue}
			/>
			<TouchableOpacity style={styles.facebookButton}>
				<Icon name="facebook" size={20} color="white" style={styles.iconLeft} />
				<Text style={styles.buttonText}> Login Using Facebook</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.googleButton}>
				<Icon
					name="google-plus"
					size={20}
					color="white"
					style={styles.iconLeft}
				/>
				<Text style={styles.buttonText}> Login Using Google Plus</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#228B22",
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		fontSize: 24,
		color: "yellow",
		fontWeight: "bold",
		marginBottom: 10,
	},
	subHeaderText: {
		fontSize: 16,
		color: "white",
		marginBottom: 20,
	},
	input: {
		width: "80%",
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		backgroundColor: "#F5F5DC",
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	facebookButton: {
		width: "80%",
		height: 40,
		backgroundColor: "#3b5998",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
		position: "relative",
	},
	googleButton: {
		width: "80%",
		height: 40,
		backgroundColor: "#db4a39",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		marginLeft: 10, // Add margin to separate icon and text
	},
	iconLeft: {
		position: "absolute",
		left: 10,
	},
});

export default App;
