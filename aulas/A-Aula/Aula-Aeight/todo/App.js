
import {theme} from "./src/styles/global";
import {Text, FlatList, StyleSheet, View} from "react-native";
import {useState} from "react";
import SearchBar from "./src/components/SearchBar";
import TaskCard from "./src/components/TaskCard";
import AddTask from "./src/components/AddTask";
import EditTask from "./src/components/EditTask";
import {TouchableOpacity} from "react-native";


export default function App(){

    const [tasks, setTasks] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [visible, setVisible] = useState(false);
    const [editVisible, setEditVisible ] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const addTask = (newTask) => {
        setTasks([...tasks, { newTask, id: Date.now().toString() }]);
        setVisible(false);
    }

    const updateTask = (updateTask) => {
        setTasks(tasks.map((task) => task.id === updateTask.id ? updateTask : task));
        setVisible(false);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const filterTask = tasks.filter(t => t.title.toLowerCase().includes(searchText.toLowerCase()));

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            paddingTop: 60,
            padding: 20
        },
        header: {
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 20
        },
        btn: {
            position: "absolute",
            bottom: 30,
            right: 30,
            backgroundColor: theme.colors.primary,
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center"
        }
    })
  return (
      <View style={styles.container}>
          <Text style={styles.header}>
              ToDo List
          </Text>

          <SearchBar value={searchText} onChange={setSearchText}/>

          <FlatList data={filterTask} keyExtractor={item => item.id} renderItem={({item}) => ( <TaskCard item ={item} onDelete={deleteTask} onEdit={openEdit}/> )} />

          <TouchableOpacity style={styles.btn} onPress={() => setVisible(true)} >
              <Text style={styles.add}>+</Text>
          </TouchableOpacity>

          <AddTask visible={visible} onSave={addTask} onClose={() => setVisible(false)} />

          <EditTask visible={editVisible} taskData={selectedTask} onSave={updateTask} onClose={() => setEditVisible(false)} />

      </View>
  )
}
