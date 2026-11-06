import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RewardCard from "../../../components/RewardCard";
import { REWARDS } from "../../../data/rewards";

const STARS = 13;

const Rewards = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <FlatList
        data={REWARDS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Text style={styles.title}>Starbucks Rewards</Text>

            <View style={styles.pillRow}>
              <View style={[styles.pill, styles.pillActive]}>
                <Text style={[styles.pillText, styles.pillTextActive]}>
                  Earn & Redeem
                </Text>
              </View>
              <View style={styles.pill}>
                <Text style={styles.pillText}>Status & Benefits</Text>
              </View>
            </View>

            <View style={styles.balance}>
              <Text style={styles.balanceLabel}>REDEEMABLE STARS</Text>
              <Text style={styles.balanceStars}>{STARS}★</Text>
              <Text style={styles.balanceExpire}>
                {STARS} will expire on Dec 1.
              </Text>
            </View>
            <Text style={styles.menuTitle}>Rewards menu</Text>
            <Text style={styles.menuSub}>
              You have {STARS} ready to redeem.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <RewardCard
            stars={item.stars}
            description={item.description}
            emoji={item.emoji}
            balance={STARS}
            isNew={item.isNew}
          />
        )}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.gap} />}
      />
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F9F7F4" },
  list: { padding: 16 },
  title: { fontSize: 34, fontWeight: "800", marginTop: 40, marginBottom: 28 },
  pillRow: {
    flexDirection: "row",
    backgroundColor: "#EFEBE6",
    borderRadius: 30,
    padding: 4,
  },
  pill: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 26,
  },
  pillActive: { backgroundColor: "#222222" },
  pillText: { fontSize: 16, fontWeight: "600", color: "#222222" },
  pillTextActive: { color: "#FFFFFF" },
  balance: {
    backgroundColor: "#2B5F43",
    borderRadius: 28,
    alignItems: "center",
    paddingVertical: 34,
    marginTop: 30,
  },
  balanceLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
  balanceStars: {
    fontSize: 52,
    fontWeight: "800",
    color: "#FFFFFF",
    marginVertical: 14,
  },
  balanceExpire: { fontSize: 15, color: "#FFFFFF" },
  menuTitle: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 40,
  },
  menuSub: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 12,
    marginBottom: 24,
  },
  gap: { height: 10 },
});
