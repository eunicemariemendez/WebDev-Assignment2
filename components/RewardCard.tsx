import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  stars: number;
  description: string;
  emoji: string;
  balance: number;
  isNew?: boolean;
};

const RewardCard = ({ stars, description, emoji, balance, isNew }: Props) => {
  const away = stars - balance;

  return (
    <View style={styles.card}>
      <View style={styles.picture}>
        <Text style={styles.emoji}>{emoji}</Text>
        {isNew && <Text style={styles.badge}>NEW</Text>}
      </View>
      <View style={styles.info}>
        <View style={styles.topRow}>
          <Text style={styles.stars}>{stars}★</Text>
          <View style={styles.lock}>
            <Ionicons name="lock-closed-outline" size={14} color="#1E1E1E" />
            <Text style={styles.lockText}>{away} away</Text>
          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default RewardCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 14,
    backgroundColor: "#F4F2EE",
    borderRadius: 22,
    padding: 16,
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 40,
  },
  badge: {
    position: "absolute",
    top: -6,
    backgroundColor: "#1E3932",
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    overflow: "hidden",
  },
  info: { flex: 1, gap: 6 },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stars: { fontSize: 20, fontWeight: "700", color: "#1E1E1E" },
  lock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#EAE6E1",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  lockText: { fontSize: 13, fontWeight: "600", color: "#1E1E1E" },
  description: { fontSize: 14, lineHeight: 21, color: "#1E1E1E" },
});
