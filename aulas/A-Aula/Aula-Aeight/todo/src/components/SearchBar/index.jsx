import {TextInput, View} from "react-native";
import {styles} from "./style";


export default function SearchBar({value, onChange}) {

    return (
        <View>
            <TextInput style={styles.input} placeholder="Search by title" value={value} onChangeText={onChange}></TextInput>
        </View>
    )
}