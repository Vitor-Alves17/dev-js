import {useState} from "react";
import {Modal, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./style";

export default function AddTask(visible, onClose, onSave) {
    const [task, setTask] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        priority: "",
    });

    const handleSave = () => {
        onSave(task);
        setTask({
            ...task
        })
    }
    return (
        <Modal visible={visible} animationType={"slide"}>
            <View style={styles.modal}>
                <Text style={styles.title}>Add Task</Text>

                <TextInput style={styles.input} placeholder={'Title'} onChangeText={t => setTask({...task, title: t})} />

                <TextInput style={styles.input} placeholder={'Description'} onChangeText={d => setTask({...task, description: d})} />

                <TextInput style={styles.input} placeholder={'Priority High/Middle/Low'} onChangeText={p => setTask({...task, priority: p})} />

                <TextInput style={styles.input} placeholder={'Start Date: DD/MM'} onChangeText={v => setTask({...task, startDate: v})}/>

                <TextInput style={styles.input} placeholder={'End Date: DD/MM'} onChangeText={v => setTask({...task, endDate: v})}/>

                <TouchableOpacity style={styles.btnSave} onPress={handleSave} >
                    <Text style={styles.btnText}>
                        Save Task
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onClose} >
                    <Text style={styles.btnCancel}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}