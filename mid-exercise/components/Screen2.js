import { Text, Image, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
const Screen02 = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;

  const [typeBike, setTypeBike] = useState([
    {
      id: 1,
      name: 'All',
      isSelected: true,
    },
    {
      id: 2,
      name: 'RoadBike',
      isSelected: false,
    },
    {
      id: 3,
      name: 'Mountain',
      isSelected: false,
    },
  ]);

  const [data, setData] = useState([
    {
      id: 1,
      img: require('../assets/pic1.png'),
      name: 'Pinarello',
      price: '$449',
      type: 'RoadBike',
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: '15% OFF',
      liked: true,
    },
    {
      id: 1,
      img: require('../assets/pic1.png'),
      name: 'Pinarello',
      price: '$449',
      type: 'RoadBike',
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: '15% OFF',
      liked: true,
    },
    {
      id: 2,
      img: require('../assets/pic1.png'),
      name: 'Pinarello',
      price: '$449',
      type: 'RoadBike',
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: '15% OFF',
      liked: true,
    },
    {
      id: 3,
      img: require('../assets/pic1.png'),
      name: 'Pinarello',
      price: '$449',
      type: 'RoadBike',
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: '15% OFF',
      liked: true,
    },
    {
      id: 4,
      img: require('../assets/pic1.png'),
      name: 'Pinarello',
      price: '$449',
      type: 'RoadBike',
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: '15% OFF',
      liked: true,
    },
    {
      id: 5,
      img: require('../assets/pic1.png'),
      name: 'Pinarello',
      price: '$449',
      type: 'RoadBike',
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: '15% OFF',
      liked: true,
    },
    {
      id: 6,
      img: require('../assets/pic1.png'),
      name: 'Pinarello',
      price: '$449',
      type: 'RoadBike',
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: '15% OFF',
      liked: true,
    },
  ]);
  const [searchText, setSearchText] = useState('');

  const filteredData = data.filter((item) => {
    if (searchText.toLowerCase() == 'all') {
      return true;
    } else if (searchText.toLowerCase() == 'roadbike') {
      return item.name.toLowerCase().includes('roadbike');
    } else if (searchText.toLowerCase() == 'mountain') {
      return item.name.toLowerCase().includes('mountain');
    }
    return false;
  });
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>The world’s Best Bike</Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 15,
        }}>
        {typeBike.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              let newItems = typeBike.map((itemN) => {
                item.id == itemN.id ? setSearchText(itemN.name) : null;
                return { ...itemN, isSelected: item.id == itemN.id };
              });
              setTypeBike(newItems);
            }}
            key={index}
            style={{
              width: 99,
              height: 32,
              borderWidth: 1,
              borderColor: '#E94141',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{
              fontFamily:'Voltaire',
              fontSize:20,
              alignContent: 'center',
              color: item.isSelected ? '#E94141' : '#BEB6B6'
            }}>{item.name}
            </Text>
            </TouchableOpacity>
        ))}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fffff',
    padding: 8,
  },
  paragraph: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#E94141',
  },
});
export default Screen02;
