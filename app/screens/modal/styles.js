import { StyleSheet, StatusBar } from "react-native";
import color from "../../style/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.faintBlack,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },

    sheet: {
        width: "100%",
        padding: 20,
        backgroundColor: color.white,
        borderRadius: 20,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: color.black,
    },

    closeButton: {
        width: 45,
        height: 45,
        borderRadius: 12,
        backgroundColor: `${color.accent}20`,
        justifyContent: "center",
        alignItems: "center",
    },

    body: {
        fontSize: 16,
        color: color.black,
    }
})