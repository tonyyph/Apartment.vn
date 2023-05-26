import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import Colors from "../../constants/Colors";
import { Category } from "./Category";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";

interface CategoryItemProps {
    data:
    | Category
    | { id?: string; title: string; selected?: boolean; image?: any };
    onSelect?: (data: Category | { id?: string; title: string }) => void;
    onPress?: () => void;
}

const CategoriesItem: FC<CategoryItemProps> = ({ data, onSelect, onPress }) => {
    return (
        <View
            style={
                data?.selected
                    ? [styles.container, styles.containerSelected]
                    : styles.container
            }
        >
            <Image source={data?.image} style={styles.imageCategories} />
            <Text style={styles.textCategories}>{data?.title}</Text>
            <TouchableOpacity
                onPress={onPress}
                style={
                    data?.selected
                        ? styles.buttonCategories
                        : [styles.buttonCategories, styles.buttonSelected]
                }
            >
                <EvilIcons
                    name="chevron-right"
                    size={24}
                    color={data?.selected ? "black" : "white"}
                />
            </TouchableOpacity>
        </View>
    );
};

export default CategoriesItem;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-around",
        width: 120,
        height: 177,
        marginRight: 20,
        paddingHorizontal: 23,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 0.3,
        borderColor: Colors["light"].yellow,
        shadowColor: Colors["light"].indigo,
        shadowOpacity: 0.75,
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowRadius: 4.6,
        elevation: 6,
        backgroundColor: "#ffffff"
    },
    containerSelected: {
        backgroundColor: Colors["light"].yellow
    },
    imageCategories: {
        width: 60,
        height: 60
    },
    textCategories: {
        paddingBottom: 5,
        fontSize: 14,
        fontWeight: "bold"
    },
    buttonCategories: {
        width: 26,
        height: 26,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonSelected: {
        backgroundColor: Colors["light"].brick
    }
});
