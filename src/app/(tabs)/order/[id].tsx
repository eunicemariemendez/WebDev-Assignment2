import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { STORES } from "../../../../data/stores";
const StoreScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const store = STORES.find((item) => item.id === id);

  if (store === undefined) {
    return (
      <View style={[styles.screen, styles.centre]}>
        <Text style={styles.errorTitle}>Could not find that store.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.body}>
      <Stack.Screen options={{ title: store.name }} />

      <View style={styles.iconCircle}>
        <Ionicons name="storefront" size={48} color="#FFFFFF" />
      </View>
      <Text style={styles.name}>{store.name}</Text>

      <Text style={styles.label}>Address</Text>
      <Text style={styles.value}>{store.address}</Text>

      <Text style={styles.label}>Hours</Text>
      <Text style={styles.value}>{store.hours}</Text>

      <Text style={styles.label}>Distance</Text>
      <Text style={styles.value}>{store.distance} km away</Text>

      <Text style={styles.label}>Drive-thru</Text>
      <Text style={styles.value}>{store.driveThru ? "Yes" : "No"}</Text>

      <Text style={styles.label}>Online ordering</Text>
      <Text style={styles.value}>
        {store.onlineOrdering ? "Available" : "Not available — order in café"}
      </Text>

      <Text style={styles.address}>Address of this screen: /order/{id}</Text>
    </ScrollView>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F9F7F4" },
  centre: { alignItems: "center", justifyContent: "center", padding: 32 },
  body: { padding: 20, gap: 8 },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#2B5F43",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: 12,
  },
  label: { fontSize: 12, fontWeight: "700", color: "#00754A", paddingTop: 10 },
  value: { fontSize: 15, color: "#1E1E1E" },
  address: { fontSize: 12, color: "#9CA3AF", paddingTop: 20 },
  errorTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#991B1B",
    textAlign: "center",
  },
});
