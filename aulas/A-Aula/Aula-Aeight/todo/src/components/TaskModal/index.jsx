import {Modal, View, Text, TextInput, TouchableOpacity} from "react-native";
import {styles} from "./style.jsx";
import {useEffect, useState} from "react";

export default function TaskModal({visible, taskToEdit, onClose, onSave}) {

    const [form, setForm] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        priority: "",
    })

    useEffect(() => {
        if (taskToEdit) setForm(taskToEdit);
        else setForm({
            title: "",
            description: "",
            startDate: "",
            endDate: "",
            priority: "",
        });
    }, [taskToEdit, visible])

    return (
        <Modal visible={visible} animationType={'slide'}>
            <View style={styles.modalBody}>
                <Text style={styles.label}>
                    {taskToEdit ? 'Edit task' : 'Add task'}

                    <TextInput style={styles.input} placeholder={'Title'} value={form.title} onChangeText={v => setForm({...form, title: v})}/>

                    <TextInput style={styles.input} placeholder={'Description'} value={form.description} onChangeText={v => setForm({...form, description: v})}/>

                    <TextInput style={styles.input} placeholder={'Start Date: DD/MM'} value={form.startDate} onChangeText={v => setForm({...form, startDate: v})}/>

                    <TextInput style={styles.input} placeholder={'End Date: DD/MM'} value={form.endDate} onChangeText={v => setForm({...form, endDate: v})}/>

                    <TextInput style={styles.input} placeholder={'Priority High/Middle/Low'} value={form.priority} onChangeText={v => setForm({...form, priority: v})}/>

                    <TouchableOpacity style={styles.btnSave} onPress={() => onSave(form)} >
                        <Text style={styles.btnText}>
                            Save Task
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose} >
                        <Text style={styles.btnCancel}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </Modal>
    )
}