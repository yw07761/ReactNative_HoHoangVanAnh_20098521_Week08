import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Sử dụng thư viện react-native-vector-icons

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={require('../assets/pic1.png')}
          style={{ width: 222, height: 210, marginTop: 10, marginLeft: 40 }}
        />
      </View>
      <View>
        <p style={styles.p}>Pina Mountain</p>
        <a style={styles.a}>
          15% OFF I 350$ 
          <a style={{ color: '#000000', marginLeft:40,  }}><s>449$</s>
          </a>
        </a>
        <p style={styles.p}>Description</p>
        <a style={styles.a}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </a>
      </View>
      <View style={styles.add}>
        <Icon name="heart" size={25} color="black" />
        <TouchableOpacity
          style={styles.title}
          onPress={() => navigation.navigate('Screen02')}>
          <Text style={styles.text}>Add to card</Text>
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
  img: {
    backgroundColor: '#E941411A',
    borderRadius: 5,
    height: 230,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E94141',
    padding: 15,
    borderRadius: 30,
    marginHorizontal: 30,
    marginTop: 10,
  },
  p: {
    fontFamily: 'Voltaire',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  a: {
    fontFamily: 'Voltaire',
    fontSize: 16,
    color: '#00000096',
  },
  add:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    alignContent: 'center',
    fontFamily: 'VT323',
    marginHorizontal: 75
  },
});
