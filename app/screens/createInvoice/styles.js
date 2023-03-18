import { StyleSheet, StatusBar } from "react-native";
import color from "../../style/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        // paddingTop: StatusBar.currentHeight,
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
        marginHorizontal: 10,
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
        marginBottom: 20,
        paddingHorizontal: 10,
        fontWeight: '600'
    },

    billingAddress: {
        backgroundColor: `${color.accent}20`,
        padding: 10,
        borderRadius: 12,
        marginBottom: 20
    },

    billingAddressText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.accent,
        marginBottom: 10,
    },

    terms: {
        backgroundColor: `${color.accent}20`,
        padding: 10,
        borderRadius: 12,
        marginBottom: 20
    },

    termsControl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    termsControlButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 50,
        backgroundColor: color.accent,
        borderRadius: 12
    },

    termsControlButtonText: {
        color: color.white,
        fontSize: 16,
        fontWeight: 'bold'
    },

    termsList: {
        marginTop: 10
    },

    termsListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        height: 20
    },

    termsListItemTitle: {
        fontSize: 14
    },

    termsListItemRightSide: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    termsListItemValue: {
        fontSize: 14
    },

    deleteButton: {
        backgroundColor: `${color.accent}20`,
        height: 20,
        width: 20,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
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

    itemsList: {
        backgroundColor: `${color.accent}20`,
        padding: 10,
        borderRadius: 12,
        marginBottom: 10
    },

    itemsListHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    itemsListIndex: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.accent,
        marginBottom: 10
    },

    itemsListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        height: 20
    },

    itemsListItemTitle: {
        fontSize: 14
    },

    itemsListItemValue: {
        fontSize: 14
    },

    vatToggles: {
        flexDirection: 'row',
        borderRadius: 12,
        overflow: 'hidden',
    },

    vatToggle: {
        height: 50,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.accent,
    },

    vatToggleText: {
        fontSize: 14,
        color: color.white,
    }
})