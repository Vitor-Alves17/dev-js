import {useEffect, useState} from "react";
import {api} from "./src/components/api";
import {ScrollView, TextInput, View, Image, Text} from "react-native";
import {globalStyles} from "./src/styles/global";


export default function App(){
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function loadProducts(){
        try {
          const res = await api.get('products');
          setProducts(res.data);
        } catch (error){
          console.log("Erro: " + error);
        }
    }
    loadProducts();
  }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );
  const handleSearch = (text) => {
    setSearch(text);
  }

  return (
      <>
          <TextInput style={globalStyles.input}
                     placeholder="Insert the product name: "
                     value={search}
                     onChangeText={handleSearch}
          />
          <Text style={globalStyles.title}>Resultado(s) da pesquisa </Text>

          <ScrollView>
              {filteredProducts.map(( product ) => (

                  <View key={ product.id} style={globalStyles.card}>
                      {product.image && (
                          <Image
                              source={{uri: product.image}}
                              style={globalStyles.image}
                              resizeMode='cover'
                          />
                      )}

                      <View style={globalStyles.infoContainer}>
                          <Text style={globalStyles.titleFilme}>
                              {product.title}
                          </Text>
                          <Text style={globalStyles.url}>
                              {product.description}
                          </Text>
                          <Text style={globalStyles.description}>
                              {product.category}
                          </Text>
                      </View>
                  </View>
              ))}
          </ScrollView>
      </>
  )
}