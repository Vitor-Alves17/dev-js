import {View, Text, TouchableOpacity} from 'react-native';
import {theme} from "../../styles/global";
import {styles} from "./style";

export default function TaskCard({item, onEdit, onDelete}) {
    const priotrityColor = theme.colors.priority[props.item.priority] || theme.colors.textSub

    return (
        <View style={[styles.card, {bordeLeftColor: priotrityColor}]}>
            <View style={{flex: 1}}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
                <Text style={[styles.badge, {color: priotrityColor}]}>
                    - {item.priority}
                </Text>
                <Text style={style.date}>
                    {item.start} - {item.end}
                </Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress = { onEdit }>
                    <Text style={styles.icon}></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = { onDelete }>
                    <Text style={styles.icon}></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}