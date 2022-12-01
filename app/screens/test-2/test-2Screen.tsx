import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, Image, FlatList } from "react-native"
import { CardStyleInterpolators, StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { Button, Card, Icon, iconRegistry, Screen, Text } from "../../components"
import { animatedFABExampleData } from './Data';
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `Test2: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="Test2" component={Test2Screen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const Test2Screen: FC<StackScreenProps<AppStackParamList, "Test2">> = observer(function Test2Screen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
    //
    const rnrImage1 = require("../../../assets/images/rnr-image-1.png")
    const rnrImage2 = require("../../../assets/images/rnr-image-2.png")
    const rnrImage3 = require("../../../assets/icons/slack.png")
    const rnrImage4 = require("../../../assets/images/steak.jpeg")
    const _keyExtractor = React.useCallback(
      (item: { id: string }) => item.id,
      []
    );
    
  return (
    <Screen style={$root} preset="scroll">
      <View style={{ marginTop:100 }}>
        <Text text="test2test2" />
      </View>

      <FlatList
        data={animatedFABExampleData}
        numColumns={2}
        renderItem={({ item }) => (
          <Card
          style={{flex:1}}
          verticalAlignment="force-footer-bottom"
          HeadingComponent={
            <View >
              {/* <Image source={item.Image}/> */}
              {/* <Button>{rnrImage4}</Button> */}
              <Button>
                <Image source={item.Image} 
                  style={{ width: 100, height:100, }} />  
              </Button>
              {/* <Image source={rnrImage4}/> */}
            </View>                                                                                                
            // <View >
            //   <Button>{rnrImage2}</Button>
            // </View>
          }
          FooterComponent={
              <Text>{item.header}</Text>
          }
        />
        )}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        //onScroll={onScroll}
      />


        
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

//MAVERICKTODO: update the generator template with new patterns

