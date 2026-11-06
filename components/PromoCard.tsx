import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  body: string;
  button: string;
  colour: string;
  emoji: string;
  onPress: () => void;
};

const PromoCard = ({ title, body, button, colour, emoji, onPress }: Props) => {
  return (
    <View style={styles.card}>
      <View style={[styles.picture, { backgroundColor: colour }]}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{body}</Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{button}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PromoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  picture: { height: 240, alignItems: "center", justifyContent: "center" },
  emoji: { fontSize: 110 },
  body: { padding: 20, gap: 12 },
  title: { fontSize: 20, fontWeight: "700", color: "#1E1E1E" },
  text: { fontSize: 15, lineHeight: 23, color: "#1E1E1E" },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#3E9A5C",
    borderRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 11,
  },
  buttonText: { fontSize: 16, fontWeight: "600", color: "#FFFFFF" },
});
