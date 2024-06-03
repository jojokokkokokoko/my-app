import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";

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
				<Text style={styles.buttonText}>Login Using Facebook</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.googleButton}>
				<Text style={styles.buttonText}>Login Using Google Plus</Text>
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
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
	},
	googleButton: {
		width: "80%",
		height: 40,
		backgroundColor: "#db4a39",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
	},
});

export default App;
