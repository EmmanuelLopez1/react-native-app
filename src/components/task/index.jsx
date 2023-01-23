import { FlatList } from "react-native"
import styles from "./styles"

import {Item} from '../'


export default ({tasks, onHandleModal}) => {
    const keyExtractor = (item) => item.id;

    return (
        <FlatList
            data={tasks}
            renderItem={({ item }) => <Item item={item} onHandleModal={onHandleModal} />}
            keyExtractor={keyExtractor}
            style={styles.listContainer}
        />
    )
} 