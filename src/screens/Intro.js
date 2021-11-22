import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import COLORS from '../const/colors';
function IntroScreen() {
  return (
    <View style={styles.container}>
      <HeaderImage />
      <Title />
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          right: 0,
          left: 0,
        }}>
        <Button />
      </View>
    </View>
  );
}
const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleStyle}>Find your</Text>
      <Text style={styles.titleStyle}>sweet Home </Text>
      <Text style={styles.catalog}>
        Schedule visit in just a few clicks visits in just a few clicks
      </Text>
    </View>
  );
};

const HeaderImage = () => {
  return (
    <View style={styles.imageContainer}>
      <FlatList
        data={DATA}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}
      />
      <Indicator />
    </View>
  );
};
const renderItem = ({item}) => {
  const {source} = item;
  return (
    <View style={{flex: 1}}>
      <Image style={styles.image} source={source} />
    </View>
  );
};
const Indicator = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}} >
      {
        DATA.map((e, index )=> <View style={styles.indicatorItem} key={index} />)
      }
    </View>
  );
};
const Button = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonTitle}>Get Started</Text>
    </TouchableOpacity>
  );
};
export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    height: height / 2 + 30,
  },
  image: {
    width,
    height: height / 2,
    borderBottomLeftRadius: 75,
  },
  titleContainer: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'GillSans',
  },
  catalog: {
    marginTop: 8,
    fontWeight: '300',
    fontFamily: 'GillSans',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: 'rgb(0,0,0)',
    paddingVertical: 16,
    margin: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonTitle: {
    color: COLORS.white,
    fontWeight: '600',
    fontFamily: 'GillSans',
    fontSize: 16,
  },
  indicatorItem: {
    width: 30,
    height: 3,
    backgroundColor: COLORS.dark,
    borderRadius: 3,
    marginLeft: 5
  }
});

const DATA = [
  {
    id: 1,
    source: require('../../assets/onboardImage.jpg'),
  },
  {
    id: 2,
    source: require('../../assets/interior1.jpg'),
  },
  {
    id: 3,
    source: require('../../assets/interior2.jpg'),
  },
];
