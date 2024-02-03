import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import colors from "../../assets/color";

const EmptyProductMonitorComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Hier API-Anfrage durchführen, um die Produktliste zu erhalten
        // Beispiel: const response = await fetch("API_ENDPOINT");
        // const data = await response.json();
        // setProducts(data.products);

        // Beispiel Daten
        const staticProducts = [
          { id: 1, name: "Produkt A", quantity: 1 },
          { id: 2, name: "Produkt B", quantity: 3 },
          { id: 3, name: "Produkt C", quantity: 1 },
        ];
        setProducts(staticProducts);
        setLoading(false); // Daten wurden geladen
      } catch (error) {
        console.error("Fehler beim Abrufen der Produktdaten:", error);
        setLoading(false); // Fehler beim Laden der Daten
      }
    };

    // Lade Produktdaten beim Mounten der Komponente
    fetchData();
  }, []);

  const lowQuantityProducts = products.filter(
    (product) => product.quantity < 2
  );

  if (loading) {
    return <Text>Lade Produktinformationen...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Produkte mit geringer Menge</Text>
      {lowQuantityProducts.length > 0 ? (
        <FlatList
          data={lowQuantityProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Text style={styles.productText}>{`Produkt: ${item.name}`}</Text>
              <Text
                style={styles.productText}
              >{`Menge: ${item.quantity}`}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Keine Produkte mit geringer Menge gefunden.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: colors.text,
  },
  productItem: {
    backgroundColor: colors.background3,
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productText: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.text,
  },
});

export default EmptyProductMonitorComponent;
