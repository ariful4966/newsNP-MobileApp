//import liraries
import React from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

const {width, height} = Dimensions.get('window');
// create a component
const NewsDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/uploads/1596258726128-laptop.jpg')}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>This is the title</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          rerum, iure quia amet voluptate recusandae blanditiis illum
          repudiandae non repellendus. Pariatur eum quae placeat, laudantium
          error, id voluptatem sapiente ipsam harum ullam provident commodi
          corrupti odio. Id ea quisquam repellat corrupti harum, omnis eaque!
          Dolor, minus? Deleniti vel eaque nulla voluptate ullam laudantium
          dicta quaerat rerum, esse, sapiente nesciunt minus. Soluta earum, quae
          repellat id, officia rerum aliquid aliquam quasi possimus sit tenetur
          dignissimos placeat saepe. Officiis numquam eligendi, fugit eveniet
          veritatis non ipsam expedita ut inventore incidunt. Optio quam, ex
          esse similique sit nemo perspiciatis. Accusamus, mollitia. Nihil,
          corporis?
        </Text>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title:{
      fontSize: 20,
      fontWeight:'bold',
      marginBottom:10
  },
  content:{
      fontSize:16,
      color:'#4e4e4e'
  }
});

//make this component available to the app
export default NewsDetail;
