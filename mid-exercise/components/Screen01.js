import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
const Screen01 = (props) => {
  const {navigation, router} = props
  const {navigate, goBack} = navigation
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        A premium online store for {"\n"} sporter and their stylish choice
      </Text>
      <View style={styles.img}>
        <Image
          source={require('../assets/pic1.png')}
          style={{ width: 262, height: 245, marginTop: 30, marginLeft: 30 }}
        />
      </View>
      <Text style={styles.h2}>
        POWER BIKE{"\n"}SHOP
      </Text>
      <View>
        <TouchableOpacity
          style={styles.title}
          onPress={() => navigate('Screen02')}>
          <Text style={styles.text}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fffff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    backgroundColor: '#E941411A',
    borderRadius: 50,
    height: 300,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E94141',
    padding: 15,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 10,
  },
  h2: {
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    marginTop: 30,
    fontSize: 25,
    fontWeight: 40
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginRight: 10,
    alignContent: 'center',
    fontFamily: 'VT323',
  },
});
export default Screen01;