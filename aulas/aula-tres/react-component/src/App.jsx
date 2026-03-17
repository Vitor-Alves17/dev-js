import Card from '../src/components/card/Card';
import {useEffect, useState} from "react";
import PokeCard from "../src/components/PokeCard/PokeCard";

export default function App() {
    const [data, setData] = useState({})
    const [poke, setPoke] = useState({})

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(res => res.json())
            .then(data => setPoke(data))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/6")
            .then(res => res.json())
            .then((data) => setData(data))
            .catch(err => console.log(err))
    }, []);


    console.log("state:" + data)
    return (
        <>
            <Card tittle={data?.title}
                  imge={data?.image}
                  descriptionn={data?.description}
                  categoria={data?.category}
            />
            <PokeCard image={poke?.sprites?.front_default}
                      namex={poke?.name}
                      type={poke?.types[0].type?.name}
            />
            <Card tittle="abelheão"
                  imge="https://preview.redd.it/mz1qcouz5xjf1.png?width=640&crop=smart&auto=webp&s=864752283a624bf6a4c60cf32f1223ef595fba73"
                  descriptionn="É uma abelha e ao mesmo tempo um lyaoum"
                  categoria="lyan"/>
            <Card tittle="Misericordia"
                  imge="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJUy7HV71PomsljT8Oa-6x3-3-0fMMsCmQA&s"
                  descriptionn="tenha piedade"
                  categoria="Ortifruty"/>
            <Card tittle="Misericordinha"
                  imge="https://pbs.twimg.com/media/GplWYAjWwAAJYuR.jpg"
                  descriptionn="filho dele"
                  categoria="Agropecuaria"/>
        </>
    )
}