import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { FilterStatus } from "../types/FilterStatus";
import { Filter } from "../components/Filter";
import { Item } from "../components/Item";

const FILTER_STATUS: FilterStatus[] = [
  FilterStatus.PENDING,
  FilterStatus.DONE,
];

const ITEMS = [
  { id: "1", status: FilterStatus.DONE, description: "1 Pacote de Café" },
  { id: "2", status: FilterStatus.PENDING, description: "3 Pacotes de macarrão" },
  { id: "3", status: FilterStatus.PENDING, description: "3 Cebolas" },
]

export function Home() {
  console.log("ITEMS", ITEMS);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/logo.png")}
        style={styles.logo}
      />

      <View style={styles.form}>
        <Input placeholder="O que você precisa Comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive
            />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={{ status: item.status, description: item.description }}
              onStatus={() => console.log("mudar o status")}
              onRemove={() => console.log("remover")}
            />
          )}
        />
      </View>
    </View>
  );
}
