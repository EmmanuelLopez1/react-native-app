import { StyleSheet } from 'react-native'
import colors from '../../../constants/theme/colors'

const itemContainer = {
  padding: 10,
  marginTop: 10,
  borderRadius: 5,
  row:1,
  flexDirection: 'row',
}

export default StyleSheet.create({
  itemContainerComplete:{
    backgroundColor: '#008000',
    ...itemContainer
  },
  itemContainerIncomplete:{
    backgroundColor: colors.primary,
    ...itemContainer
  },
  item: {
    width:'75%',
    color: '#fff',
  },
  status:{
    width:'25%',
    color:'#fff',
    fontWeight:'bold',
  }
})