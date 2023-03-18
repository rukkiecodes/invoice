import { StyleSheet, StatusBar } from "react-native";
import color from "./color";

export default StyleSheet.create({
    barStyle: {
        backgroundColor: color.white,
        height: 55,
        shadowColor: color.black,
        marginTop: StatusBar.currentHeight,
        elevation: 0,
    },

    tabLabel: {
        fontSize: 15,
        fontWeight: "bold",
        color: color.black,
    }
})