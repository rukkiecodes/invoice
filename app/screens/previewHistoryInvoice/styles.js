import { StyleSheet, StatusBar } from "react-native";
import color from "../../style/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight + 40,
        backgroundColor: color.white,
    },

    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20
    },

    goBackBytton: {
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${color.accent}20`,
        marginRight: 10
    },

    shareButton: {
        flex: 1,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.accent,
    },

    shareButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.white
    }
})