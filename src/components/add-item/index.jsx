import { View, TextInput, Button } from "react-native"
import styles from "../../styles"

const AddItem = ({
    placeholder, 
    task, 
    handleChange, 
    buttonText, 
    buttonColor, 
    onHandleSubmit
}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          autoCapitalize='characters'
          value={task}
          onChangeText={handleChange}
        />
        <Button
          title={buttonText}
          color={buttonColor}
          onPress={onHandleSubmit}
          disabled={!task}
        />
      </View>
  )
}

export default AddItem