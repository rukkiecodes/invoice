import { StyleSheet, StatusBar } from "react-native";
import color from "../../style/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.faintBlack,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: 'center'
    },

    sheet: {
        backgroundColor: color.white,
        padding: 20,
        borderRadius: 12,
        width: '100%',
    },

    sheetHead: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.black,
        marginBottom: 10,
    },

    closeButton: {
        width: 45,
        height: 45,
        borderRadius: 12,
        backgroundColor: `${color.accent}20`,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        backgroundColor: `${color.accent}20`,
        height: 50,
        borderRadius: 12,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontWeight: '600'
    },

    addButton: {
        height: 50,
        backgroundColor: color.accent,
        paddingHorizontal: 20,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },

    addButtonText: {
        color: color.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
})