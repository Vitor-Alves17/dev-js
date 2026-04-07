import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {theme} from "../../styles/global";
import TaskCardStyle from "./styles";

export default function TaskCard(props) {
    const priotrityColor = theme.colors.priority[props.item.priority] || theme.colors.textSub

    return (
        <View style={[styles.card, {bordeLeftColor: priotrityColor}]}>
            <View style={{flex: 1}}>
                <Text style={styles.title}>
                    {props.item.title}
                </Text>
                <Text style={styles.description}>
                    {props.item.description}
                </Text>
                <Text style={[styles.badge, {color: priotrityColor}]}>
                    - {props.item.priority}
                </Text>
                <Text style={style.date}>
                    {props.item.start} - {props.item.end}
                </Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress = { props.onEdit }>
                    <Text style={styles.icon}></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = { props.onDelete }>
                    <Text style={styles.icon}></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}