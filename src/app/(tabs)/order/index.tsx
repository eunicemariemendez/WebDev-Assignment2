import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import StoreCard from "../../../../components/StoreCard";
import { STORES } from "../../../../data/stores";

const Order = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [mode, setMode] = useState("Pickup");
  const [tab, setTab] = useState("Nearby");

  const openStore = (id: string) => {
    router.push(`/order/${id}`);
  };

  const visible = STORES.filter((store) => {
    if (tab == "Previous") return store.previous;
    return true;
  });

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <View style={styles.topBar}>
        <Ionicons name="search-outline" size={30} color="#6b6b6b" />
        <View style={styles.modeRow}>
          <Pressable
            style={[styles.mode, mode === "Pickup" && styles.modeActive]}
            onPress={() => setMode("Pickup")}
          >
            <Text
              style={[
                styles.modeText,
                mode === "Pickup" && styles.modeTextActive,
              ]}
            >
              Pickup
            </Text>
          </Pressable>

          <Pressable
            style={[styles.mode, mode === "Delivery" && styles.modeActive]}
            onPress={() => setMode("Delivery")}
          >
            <Text
              style={[
                styles.modeText,
                mode === "Delivery" && styles.modeTextActive,
              ]}
            >
              Delivery
            </Text>
          </Pressable>
        </View>
        <Text style={styles.skip}>Skip</Text>
      </View>

      <FlatList
        data={visible}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <View style={styles.map}>
              <View style={[styles.road, styles.roadDown]} />
              <View style={[styles.road, styles.roadAcross]} />
              <View style={styles.lake} />
              <Text style={[styles.area]}> MCKENZIE {"\n"}TOWNE</Text>
              {STORES.map((store, index) => (
                <View
                  key={store.id}
                  style={[
                    styles.pin,
                    { top: 30 + index * 55, left: 90 + index * 60 },
                  ]}
                ></View>
              ))}

              <View style={styles.locate}>
                <Ionicons name="navigate-outline" size={26} color="#333333" />
              </View>
            </View>
            <View style={styles.tabRow}>
              <Pressable
                style={[styles.tab, tab === "Nearby" && styles.tabActive]}
                onPress={() => setTab("Nearby")}
              >
                <Text
                  style={[
                    styles.tabText,
                    tab === "Nearby" && styles.tabTextActive,
                  ]}
                >
                  Nearby
                </Text>
              </Pressable>
              <Pressable
                style={[styles.tab, tab === "Previous" && styles.tabActive]}
                onPress={() => setTab("Previous")}
              >
                <Text
                  style={[
                    styles.tabText,
                    tab === "Previous" && styles.tabTextActive,
                  ]}
                >
                  Previous
                </Text>
              </Pressable>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <StoreCard
            name={item.name}
            address={item.address}
            distance={item.distance}
            hours={item.hours}
            onlineOrdering={item.onlineOrdering}
            driveThru={item.driveThru}
            onPress={() => openStore(item.id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.line} />}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  modeRow: {
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "#2b5f43",
    borderRadius: 30,
  },
  mode: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 30,
  },
  modeActive: {
    backgroundColor: "#2b5f43",
  },
  modeText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#2b5f43",
  },
  modeTextActive: {
    color: "#FFFFFF",
  },
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
  tabActive: {
    borderBottomColor: "#3e9a5c",
  },
  tabText: {
    fontSize: 16,
    color: "#6b6b6b",
  },
  tabTextActive: {
    color: "#1e1e1e",
    fontWeight: "600",
  },
  skip: {
    fontSize: 17,
    fontWeight: "700",
    color: "#2b5f43",
  },
  map: {
    height: 300,
    backgroundColor: "#f2eee6",
    overflow: "hidden",
  },
  road: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
  },
  roadDown: {
    left: 200,
    top: 0,
    bottom: 0,
    width: 10,
  },
  roadAcross: {
    left: 0,
    right: 0,
    top: 150,
    height: 8,
  },

  lake: {
    position: "absolute",
    left: 20,
    top: 190,
    width: 90,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#9FD0EE",
  },
  area: {
    position: "absolute",
    left: 150,
    top: 170,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
    color: "#555555",
  },
  pin: {
    position: "absolute",
    width: 28,
    height: 28,
    borderRadius: 12,
    backgroundColor: "#3e9A5c",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  locate: {
    position: "absolute",
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 1,
    backgroundColor: "#e5e5e5",
    marginHorizontal: 16,
  },
});
