import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  stars: number;
  status: string;
  onPress: () => void;
};

const StarCard = ({ stars, status, onPress }: Props) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.label}>Star balance</Text>
        <Text style={styles.stars}>{stars}★</Text>
      </View>
      <View style={styles.statusRow}>
        <Text style={styles.status}>
          {status.toUpperCase()}
          {"\n"}STATUS
        </Text>
        <Ionicons name="chevron-forward" size={26} color="#FFFFFF" />
      </View>
    </Pressable>
  );
};

export default StarCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2B5F43",
    borderRadius: 6,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  label: { fontSize: 16, color: "#FFFFFF" },
  stars: { fontSize: 40, fontWeight: "700", color: "#FFFFFF" },
  statusRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  status: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
    letterSpacing: 1.2,
    textAlign: "center",
    lineHeight: 22,
  },
});