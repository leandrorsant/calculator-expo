import { StyleSheet } from "react-native";
import { COLORS } from "./COLORS";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.light,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnWhite: {
      backgroundColor: COLORS.white,
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10,
      borderColor: COLORS.black,
      margin: 5,
    }
  });

