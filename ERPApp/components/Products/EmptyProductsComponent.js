import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import colors from "../../assets/color";
import { getAllProducts } from "../../Data/ProductRequest";

const EmptyProductMonitorComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProduct = await getAllProducts();
        setProducts(fetchedProduct);
        console.info("Product updated:");
        setLoading(false); // Daten wurden geladen
      } catch (error) {
        console.error("Fehler beim Abrufen der Produktdaten:", error);
        setLoading(false); // Fehler beim Laden der Daten
      }
    };

    // Lade Produktdaten beim Mounten der Komponente
    fetchData();
  }, []);

  if (loading || !products) {
    return <Text>Lade Produktinformationen...</Text>;
  }

  const lowQuantityProducts = products.filter(
    (product) => product.quantity <= 2
  );

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
