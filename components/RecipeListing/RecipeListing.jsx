import { StyleSheet, Text, View } from 'react-native';

const RecipeListing = () => {
    return (
        <View style={styles.container}>
            <Text>Recipe Listing</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RecipeListing