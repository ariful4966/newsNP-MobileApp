//import liraries
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Subtitle from './Subtitle';
import Title from './Title';

// create a component
const BlockCard = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../../assets/desktopBg.jpg')}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia,
          voluptatem, possimus aspernatur quos rerum obcaecati magni doloribus
          sit rem molestias numquam perferendis veritatis fugiat dolorum placeat
          sed consequuntur quaerat.
        </Title>
        <Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          voluptates minima itaque pariatur corrupti eaque velit possimus?
          Dolorem aspernatur iste harum earum suscipit iusto, maiores ipsam,
          exercitationem ab voluptatum excepturi!
        </Subtitle>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});

//make this component available to the app
export default BlockCard;
