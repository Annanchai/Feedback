import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LanguageSvg } from '../assets/svgs/svg'

export default LanguageScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.svgContainer}>
                <LanguageSvg />
            </View>
            <View style={styles.logoContainer}>
                <Image 
                source={require('../assets/images/logo.png')}
                style={styles.logo}
                />
                <View>
                    <Text>ﻞﻀﻓأ ﻪﻣﺪﺧ ﻚﻟ ﺮﻓﻮﺗ فﻮﺳو،ﻪﻤﻴﻗ ﻚﺗﺎﻈﺣﺎﻠﻣ</Text>
                    <Text>Your feedback is valuable, it will provide you{'/n'}a better service!</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        
    },

    svgContainer:{
        position:'absolute',
        
       
    },

    logoContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        marginTop:80,
        paddingHorizontal:30
        
    },

    logo:{
        width:300,
        height:130,
        
    },

})