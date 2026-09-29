import { Octicons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

type cardProps = {
    name: string;
    description: string;
    price: string;
    source: {}
}

export default function Card({ name, description, price,source }: cardProps) {
    return (
        <View style={styles.menuCard}>
            <Image source={source} style={styles.imageCard}></Image>
            <Text style={styles.menuTitleCard}>{name}</Text>
            <Text style={styles.menuSubtitleCard}>{description}</Text>
            <View style={styles.bottonCard}>
                <Text style={styles.menuPriceCard}>{price}</Text>
                <TouchableOpacity>
                    
                        <Octicons style={styles.iconCard} name="feed-plus" size={27} color="#7B1FA2" />
                
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    imageCard: {
    borderRadius: 16,
    width: 144,
    height: 100,
  },
    menuCard: { 
        width: "48%",
        padding: 16,
        backgroundColor: "#ffffffff",
        borderRadius: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        elevation: 3,
        marginBottom: 16
    },

    menuTitleCard: {
        fontSize: 16,
        fontWeight: '700',
        color: "#2C1B30",
        marginTop:10
    },

    menuSubtitleCard: {
        fontSize: 12,
        color: "#644D6A",
        marginTop: 4
    },

    menuPriceCard: {
        fontSize: 16,
        fontWeight: '800',
        color: "#7B1FA2",
        marginTop: 12
    },
    bottonCard:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconCard:{
        marginTop:10
    }
})
