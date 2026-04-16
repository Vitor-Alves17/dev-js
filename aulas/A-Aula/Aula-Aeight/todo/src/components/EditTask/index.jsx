import {useEffect, useState} from "react";
import {Modal, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./style.jsx";

export default function EditTask({visible, taskData, onSave, onCancel}) {
    const [currentTask, setCurrentTask] = useState(taskData);

    useEffect(() => {setCurrentTask(currentTask)}, [taskData])

    return (
        <Modal visible={visible} animationType={'fade'}>
            <View style={styles.modal}>
                <Text style={styles.title}>
                    Editar Tarefa
                </Text>

                <TextInput value={currentTask?.title} style={styles.input} onChangeText={t => setCurrentTask({...currentTask, title: t})}/>

                <TextInput value={currentTask?.description} style={styles.input} onChangeText={d => setCurrentTask({...currentTask, description: d})}/>

                <TouchableOpacity style={styles.btnSave} onPress={onSave}>
                    <Text>Update</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCancel} onPress={onCancel}>
                    <Text>Cancel</Text>
                </TouchableOpacity>

            </View>
        </Modal>
    )
}

