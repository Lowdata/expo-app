/**
 * @description Styles for the container component
 */

import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    card:{
        backgroundColor: COLORS.dark,
        borderBlockColor:COLORS.dark,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        marginVertical:-60,
        marginLeft:100,
        paddingVertical:'20%',
        borderRadius: 20,
        borderColor: COLORS.gray,
        borderWidth: 1,
        width: '120%',
        
    },
    text:{
        fontFamily: FONT.bold,
        fontSize: SIZES.xxLarge,
        color: COLORS.white, 
        position: 'absolute',
        left:65     
    },
    polygonImage:{
        width: 50,
        height: 50,
        paddingBottom:10,
        backgroundColor: COLORS.dark,
        borderRadius:80,
        position: 'absolute',
        left: 20
      },
    
});

export default styles;