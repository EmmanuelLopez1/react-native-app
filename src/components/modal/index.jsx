import {
    Modal,
    Text,
    View,
    Button
} from "react-native"
import styles from "./styles"


export default ({ isModalVisible, setIsModalVisible, task, deleteTask, completeTask }) => {
    return (
        <Modal visible={isModalVisible} animationType='slide'>
            <View style={styles.modalConatiner}>
                <Text style={{ ...styles.modalText, ...styles.modalTitle }}>Task Detail</Text>
                <Text style={styles.modalText}>Are you sure you want delete this item?</Text>
                <Text
                    style={styles.modalText}
                >
                    {task}
                </Text>
                <View
                    style={styles.modalButtonContainer}>
                    <Button
                        style={styles.modalButton}
                        title="Cancel"
                        onPress={() => { setIsModalVisible(false) }}
                    />
                    <Button
                        style={styles.modalButton}
                        title="Complete"
                        onPress={completeTask}
                    />
                    <Button
                        style={styles.modalButton}
                        title="Delete"
                        onPress={deleteTask}
                    />
                </View>
            </View>
        </Modal>
    )
}