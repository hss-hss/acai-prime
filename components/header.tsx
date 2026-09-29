import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Header(){
    return(
        <View style= {styles.header}>
            <View>
                <Text style={styles.headerTitle}> Açaí Prime</Text>
                <Text style = {styles.headerSubtitle}>O sabor puro da Amazônia</Text>
            </View>
            <View style = {styles.headerIcon}>
                <Ionicons name="person" size={20} color="#2f2f2f"> </Ionicons>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        width: "100%",
        padding: 60,
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle:{
        fontSize: 23,
        fontWeight: 900

    },
    headerSubtitle:{
        fontSize: 16,
        marginTop: 4,
        fontWeight:400,
        color: "#644d6a"
    },
    headerIcon:{
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
    }
})