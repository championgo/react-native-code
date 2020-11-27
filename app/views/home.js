import * as React from 'react';
import {connect} from 'react-redux';
import {View, Text, Button,StyleSheet} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Marquee from '../components/Marquee';

const HomeScreen = ({navigation, count}) =>{
    return (
        <View style={styles.container}>
            <Marquee />
         </View>  
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default connect(({count}) => ({
    count
}))(HomeScreen);
