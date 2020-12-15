import React, { useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import useTheme from '../../../hooks/useTheme'
// TODO: ADD TIMER SO THAT IT FADES IF IT ISN'T UPDATED FREQENT;Y
// TODO: Don't bound image, instead pop up image in center of view?
const Barcode = ({ barcode, onSelect }) => {
  const margin = 5
  const { colors } = useTheme()
  const { cornerPoints, bounds, data, loaded, target, type } = barcode
  // const [opacity, setOpacity] = useState(1)
  const [{ top, left, width, height, opacity }, setState] = useState({
    top: 0 - margin,
    left: 0 - margin,
    width: 0 - margin * 2,
    height: 0 - margin * 2,
    opacity: 1,
  })
  if (opacity <= 0) {
    return null
  }
  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        opacity: 1,
        top: bounds.origin.y - margin,
        left: bounds.origin.x - margin,
        width: bounds.size.width + margin * 2,
        height: bounds.size.height + margin * 2,
      }
    })
  }, [bounds])

  const handlePress = () => {
    console.log('oh gosh oh gee!!!!')
    onSelect({ type, target, data })
  }
  return (
    <Pressable
      onPress={handlePress}
      style={{
        position: 'absolute',
        top,
        left,
        width,
        height,
        opacity,
        backgroundColor: colors.yellow,
        borderRadius: 15,
        padding: 5,
      }}
    >
      <Text>{data}</Text>
    </Pressable>
  )
}
export default Barcode
