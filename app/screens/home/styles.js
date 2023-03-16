import { StyleSheet, StatusBar } from "react-native";
import color from "../../style/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
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
        width: 80,
        height: 85,
    },

    leftInfo: {
        marginLeft: 10,
    },

    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: color.accent,
        marginBottom: 5,
    },

    info: {
        fontSize: 12,
        marginBottom: 5,
        color: color.accent,
    },

    formSrollview: {
        flex: 1
    },

    controles: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
    },

    saveButton: {
        backgroundColor: color.accent,
        height: 50,
        flex: 1,
        marginRight: 10,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },

    saveButtonText: {
        color: color.white,
        fontSize: 15,
        fontWeight: 'bold'
    },

    shareButton: {
        width: 50,
        height: 50,
        backgroundColor: `${color.accent}20`,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },

    shareButtonIcon: {
        color: color.accent
    },

    input: {
        backgroundColor: `${color.accent}20`,
        height: 50,
        borderRadius: 12,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontWeight: '600',
        fontsize: 16
    },

    itemContol: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        height: 50
    },

    itemText: {
        fontSize: 16,
        fontWeight: '600',
        color: color.accent
    },

    itemButton: {
        height: 50,
        backgroundColor: color.accent,
        paddingHorizontal: 20,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },

    itemButtonText: {
        color: color.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
})