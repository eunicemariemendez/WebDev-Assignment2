import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Scan = () => {
  const insets = useSafeAreaInsets();
  const [mode, setMode] = useState("Scan only");

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <View style={styles.topBar}>
        <Text style={styles.stars}>13★</Text>
        <Text style={styles.name}>Eunice M.</Text>
        <Ionicons name="add-circle-outline" size={34} color="#6B6B6B" />
      </View>

      <View style={styles.tabRow}>
        <Pressable
          style={[styles.tab, mode === "Scan & Pay" && styles.tabActive]}
          onPress={() => setMode("Scan & Pay")}
        >
          <Text
            style={[
              styles.tabText,
              mode === "Scan & Pay" && styles.tabTextActive,
            ]}
          >
            Scan & Pay
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, mode === "Scan only" && styles.tabActive]}
          onPress={() => setMode("Scan only")}
        >
          <Text
            style={[
              styles.tabText,
              mode === "Scan only" && styles.tabTextActive,
            ]}
          >
            Scan only
          </Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Ionicons name="star" size={150} color="#CBA258" />
          <Ionicons
            name="star"
            size={22}
            color="#F3C969"
            style={styles.sparkleOne}
          />
          <Ionicons
            name="star"
            size={28}
            color="#F3C969"
            style={styles.sparkleTwo}
          />
          <Ionicons
            name="star"
            size={24}
            color="#CBA258"
            style={styles.sparkleThree}
          />
        </View>

        <View style={styles.cardBottom}>
          {mode === "Scan only" ? (
            <>
              <Text style={styles.title}>Scan to earn Stars</Text>
              <Text style={styles.earns}>Earns 1★ per $1</Text>
            </>
          ) : (
            <>
              <Text style={styles.title}>Scan to pay & earn</Text>
              <Text style={styles.balance}>Card balance $24.50</Text>
            </>
          )}
          <Ionicons
            name="qr-code"
            size={170}
            color="#000000"
            style={styles.qr}
          />
        </View>
      </View>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F4F4F4" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
  stars: { fontSize: 20, fontWeight: "600", width: 60 },
  name: { fontSize: 22, fontWeight: "600" },
  tabRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  tabActive: { borderBottomColor: "#3E9A5C" },
  tabText: { fontSize: 16, color: "#6B6B6B" },
  tabTextActive: { color: "#1E1E1E", fontWeight: "600" },
  card: {
    margin: 22,
    marginTop: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  cardTop: {
    height: 180,
    backgroundColor: "#1E3932",
    alignItems: "center",
    justifyContent: "center",
  },
  sparkleOne: { position: "absolute", left: 50, top: 24 },
  sparkleTwo: { position: "absolute", left: 80, top: 60 },
  sparkleThree: { position: "absolute", right: 60, top: 110 },
  cardBottom: { alignItems: "center", paddingTop: 30, paddingBottom: 60 },
  title: { fontSize: 24, fontWeight: "700", color: "#1E1E1E" },
  earns: {
    marginTop: 10,
    borderWidth: 1.5,
    borderColor: "#CBA258",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 14,
    fontWeight: "600",
  },
  balance: { marginTop: 10, fontSize: 15, color: "#6B6B6B" },
  qr: { marginTop: 40 },
});
