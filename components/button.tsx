import { StyleSheet, Text, TouchableOpacity } from "react-native";

type buttonProps={
    title: string;
    onPress: () =>void;
}

export default function Button ({title,onPress}:buttonProps){
    return(<TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
    width: "100%",
    backgroundColor: "#7B1FA2",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#7B1FA2",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 4,
    }
    ,
    buttonText:{
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffffff"
    }
})