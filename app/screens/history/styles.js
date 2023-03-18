import { StyleSheet, StatusBar } from "react-native";
import color from "../../style/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        // paddingTop: StatusBar.currentHeight,
    },

    item: {
        shadowColor: color.black,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor: color.white,
        borderRadius: 20,
        marginBottom: 20,
        overflow: "hidden",
        margin: 20,
    },

    window: {
        width: "100%",
        backgroundColor: color.white,
        padding: 10
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