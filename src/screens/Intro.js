import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import COLORS from '../const/colors';

function IntroScreen() {
  return (
    <View style={styles.container}>
      <HeaderImage />
      <Title/>
    </View>
  );
}
const Title = () => {
  return (
    <View style={styles.titleContainer} >
      <Text style={styles.titleStyle} >Find your</Text>
      <Text style={styles.titleStyle} >sweet Home </Text>
      <Text style={styles.catalog} >Schedule visit in just a few clicks visits in just a few clicks</Text>
    </View>
  );
};

const HeaderImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        // resizeMode="contain"
        style={styles.image}
        source={require('../../assets/onboardImage.jpg')}
      />
    </View>
  );
};
export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    height: height / 2,
  },
  image: {
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 75,
  },
  titleContainer: {
    marginHorizontal: 20,
    marginTop: 40
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: '600'
  },
  catalog: {
    marginTop: 8,
    fontWeight: '300',
    
  }
});
