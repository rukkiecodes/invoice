import { StyleSheet, StatusBar } from "react-native";
import color from "../../../style/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        // paddingTop: StatusBar.currentHeight,
    },

    header: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingVertical: 20,
    },

    left: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },

    logo: {
        width: 70,
        height: 75,
    },

    leftInfo: {
        marginLeft: 10,
    },

    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: color.accent,
        marginBottom: 5,
    },

    info: {
        fontSize: 10,
        marginBottom: 5,
        color: color.accent,
    },

    content: {
        padding: 20
    },

    contentItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    }
})