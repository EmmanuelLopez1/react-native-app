import styles from './styles'
import { TouchableOpacity, Text } from 'react-native'

export default ({ item, onHandleModal }) => {
    return (
        <TouchableOpacity
            style={item.complete ? styles.itemContainerComplete : styles.itemContainerIncomplete}
            onPress={() => onHandleModal(item)}
        >

            <Text style={styles.item}>
                {item.value}
            </Text>
            <Text style={styles.status}>
                {item.complete ? 'Status complete' : 'Status open'}
            </Text>
        </TouchableOpacity>
    )
}