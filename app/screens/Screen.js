import React from 'react';
import { SafeAreaView, View, Platform, StyleSheet } from 'react-native';

function Screen({children, outerStyle}) {
    return (

        <SafeAreaView style={[styles.container, outerStyle]}>
            <View style={styles.view}>
                {children}
            </View>
        </SafeAreaView>
        
    );
}


const styles = StyleSheet.create({
  container:{
    padding: Platform.OS === 'android' ? 22 : 0,
    flex:1,
  },
  view:{

  },
})


export default Screen;