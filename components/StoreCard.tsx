import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  address: string;
  distance: number;
  hours: string;
  onlineOrdering: boolean;
  driveThru: boolean;
  onPress: () => void;
};

const StoreCard = ({
  name,
  address,
  distance,
  hours,
  onlineOrdering,
  driveThru,
  onPress,
}: Props) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.info}>
        {!onlineOrdering && (
          <Text style={styles.warning}>Online ordering not available</Text>
        )}
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.line}>{address}</Text>
        <Text style={styles.line}>
          {distance} km · {hours}
        </Text>
        <View style={styles.amenities}>
          <View>
            <Ionicons name="storefront-outline" size={30} color="#6B6B6B" />
            <Text style={styles.amenityText}>In café</Text>
          </View>
          {driveThru && (
            <View>
              <Ionicons name="car-outline" size={30} color="#6B6B6B" />
              <Text style={styles.amenityText}>Drive-thru</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.icons}>
        <Ionicons name="heart-outline" size={30} color="#6B6B6B" />
        <Ionicons name="information-circle-outline" size={32} color="#6B6B6B" />
      </View>
    </Pressable>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#FFFFFF",
  },
  info: { flex: 1, gap: 4 },
  warning: {
    alignSelf: "flex-start",
    backgroundColor: "#FBE3A6",
    borderRadius: 8,
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 6,
    fontSize: 15,
  },
  name: { fontSize: 18, fontWeight: "700", color: "#1E1E1E" },
  line: { fontSize: 15, lineHeight: 23, color: "#1E1E1E" },
  amenities: { flexDirection: "row", gap: 18, marginTop: 8 },
  amenityText: { fontSize: 14, color: "#6B6B6B" },
  icons: { flexDirection: "row", gap: 20 },
});
