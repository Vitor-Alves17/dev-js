import {useEffect, useState} from "react";
import {api} from "./src/services/api";
import {ScrollView, TextInput, View, Image, Text} from "react-native";
import {globalStyles} from "./src/styles/global";
import {SafeAreaView} from "react-native-safe-area-context";

export default function App(){
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function loadMovies(){
      if(search.trim() !== ''){
        try {
          const res = await api.get(search.replace(' ', '%20'));
          setMovies(res.data);
        } catch (error){
          console.log("Erro: " + error);
        }
      } else {
        setMovies([]);
      }
    }
    loadMovies();
  }, [search]);

  const handleSearch = (text) => {
    setSearch(text);
  }

  return (
      <SafeAreaView style={globalStyles.container}>
        <TextInput style={globalStyles.input}
                   placeholder="Insert the movie name: "
                   value={search}
                   onChangeText={handleSearch}
        />
        <Text style={globalStyles.title}>Resultado(s) da pesquisa </Text>

        <ScrollView>
          {movies.map(( movie ) => (
              <View key={ movie.show.id} style={globalStyles.card}>
                {movie.show.image && (
                    <Image
                        source={{ uri: movie.show.image.medium }}
                        style={globalStyles.image}
                        resizeMode='cover'
                    />
                )}

                <View style={globalStyles.infoContainer}>
                  <Text style={globalStyles.titleFilme}>
                    {movie.show.name}
                  </Text>
                  <Text style={globalStyles.url}>
                    {movie.show.url}
                  </Text>
                </View>
              </View>
          ))}
        </ScrollView>
      </SafeAreaView>
  )
}