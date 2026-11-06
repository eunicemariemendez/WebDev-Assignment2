import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PromoCard from "../../../components/PromoCard";
import StarCard from "../../../components/StarCard";
import { PROMOS } from "../../../data/promos";

const Home = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <FlatList
        data={PROMOS}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={
          <View>
            <Text style={styles.greeting}>Have the best evening, Eunice</Text>

            <View style={styles.linkRow}>
              <Ionicons name="mail-outline" size={26} color="#1E1E1E" />
              <Text style={styles.link}>Inbox</Text>
              <Ionicons name="location-outline" size={26} color="#1E1E1E" />
              <Text style={styles.link}>Cafes</Text>
              <View style={styles.spacer}></View>
              <Ionicons name="receipt-outline" size={28} color="#1e1e1e" />
              <Ionicons
                name="person-circle-outline"
                size={34}
                color="#1e1e1e"
              />
            </View>

            <View style={styles.starCard}>
              <StarCard
                stars={13}
                status="Green"
                onPress={() => router.push("/rewards")}
              />
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <PromoCard
            title={item.title}
            body={item.body}
            button={item.button}
            colour={item.colour}
            emoji={item.emoji}
            onPress={() => router.push("/order")}
          />
        )}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.gap} />}
      />

      <Pressable style={styles.scanButton} onPress={() => router.push("/scan")}>
        <Text style={styles.scanText}>Scan in café</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F9F7F4" },
  list: { paddingHorizontal: 10, paddingBottom: 100 },
  greeting: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1E1E1E",
    paddingHorizontal: 8,
    paddingTop: 40,
    paddingBottom: 28,
  },
  linkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 8,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  link: { fontSize: 18, color: "#1E1E1E" },
  spacer: { flex: 1 },
  starCard: { paddingVertical: 16 },
  gap: { height: 18 },
  scanButton: {
    position: "absolute",
    right: 24,
    bottom: 24,
    backgroundColor: "#2B5F43",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#3E9A5C",
    paddingHorizontal: 30,
    paddingVertical: 18,
  },
  scanText: { fontSize: 18, fontWeight: "600", color: "#FFFFFF" },
});
