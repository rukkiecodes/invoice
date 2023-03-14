import { StyleSheet } from "react-native";
import color from "./color";

export default StyleSheet.create({
    barStyle: {
        backgroundColor: color.mainBackground,
        height: 55,
        shadowColor: color.black,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
})