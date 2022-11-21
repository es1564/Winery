import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, Image } from "react-native"
import { CardStyleInterpolators, StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { Button, Card, Icon, iconRegistry, Screen, Text } from "../../components"
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
  return (
    <Screen style={$root} preset="scroll">
      <View style={{ marginTop:300 }}>
        <Text text="test2test2" />
      </View>

      <View style={{ marginTop:10, flexDirection: "row", padding: 10 }}>
        <Card
        style={{flex:1}}
        verticalAlignment="force-footer-bottom"
        HeadingComponent={
          <View >
            <Button>{rnrImage2}11</Button>
          </View>
        }
        // content={`${episode.parsedTitleAndSubtitle.title} - ${episode.parsedTitleAndSubtitle.subtitle}`}
        // {...accessibilityHintProps}
        FooterComponent={
            <Text>집들이</Text>
        }
      />
      <View style={{margin:5}}></View>
      <Card
        style={{flex:1}}
      verticalAlignment="force-footer-bottom"
      HeadingComponent={
        <View >
          <Button>LeftA={rnrImage2}22</Button>
        </View>
      }
      // content={`${episode.parsedTitleAndSubtitle.title} - ${episode.parsedTitleAndSubtitle.subtitle}`}
      // {...accessibilityHintProps}
      FooterComponent={
        <Text>생일</Text>
      }
    />
  </View>

  <View style={{flexDirection: "row", padding: 10 }}>
    <Card
    style={{flex:1}}
    verticalAlignment="force-footer-bottom"
    HeadingComponent={
      <View >
        {/* <Image source={rnrImage1}/> */}
        {/* <Button>{rnrImage4}</Button> */}
        <Button>
          <Image source={require('../../../assets/images/steak.jpeg')} 
            style={{ width: 100, height:100, }} />  
        </Button>
        {/* <Image source={rnrImage4}/> */}
      </View>
    }
    content="고기고기고기!!!"
    // {...accessibilityHintProps}
    FooterComponent={
        <Text>고기</Text>
    }
  />
  <View style={{margin:5}}></View>
  <Card
    style={{flex:1}}
  verticalAlignment="force-footer-bottom"
  HeadingComponent={
    <View >
      <Button>
        <Image source={require('../../../assets/images/seafood.jpeg')} 
          style={{ width: 100, height:100, }} />  
      </Button>
      {/* <Icon icon="bell" /> */}
    </View>
  }
  // content={`${episode.parsedTitleAndSubtitle.title} - ${episode.parsedTitleAndSubtitle.subtitle}`}
  // {...accessibilityHintProps}
  FooterComponent={
    <Text>해산물</Text>
  }
  />
  </View>
{/* 
    <Card
      style={$item}
      verticalAlignment="force-footer-bottom"
      onPress={handlePressCard}
      onLongPress={handlePressFavorite}
      HeadingComponent={
        <View style={$metadata}>
          <Text
            style={$metadataText}
            size="xxs"
            accessibilityLabel={episode.datePublished.accessibilityLabel}
          >
            {episode.datePublished.textLabel}
          </Text>
          <Text
            style={$metadataText}
            size="xxs"
            accessibilityLabel={episode.duration.accessibilityLabel}
          >
            {episode.duration.textLabel}
          </Text>
        </View>
      }
      content={`${episode.parsedTitleAndSubtitle.title} - ${episode.parsedTitleAndSubtitle.subtitle}`}
      {...accessibilityHintProps}
      RightComponent={<Image source={imageUri} style={$itemThumbnail} />}
      FooterComponent={
        <Button
          onPress={handlePressFavorite}
          onLongPress={handlePressFavorite}
          style={[$favoriteButton, isFavorite && $unFavoriteButton]}
          accessibilityLabel={
            isFavorite
              ? translate("demoPodcastListScreen.accessibility.unfavoriteIcon")
              : translate("demoPodcastListScreen.accessibility.favoriteIcon")
          }
          LeftAccessory={ButtonLeftAccessory}
        >
          <Text
            size="xxs"
            accessibilityLabel={episode.duration.accessibilityLabel}
            weight="medium"
            text={
              isFavorite
                ? translate("demoPodcastListScreen.unfavoriteButton")
                : translate("demoPodcastListScreen.favoriteButton")
            }
          />
        </Button>
      }
    /> */}
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

//MAVERICKTODO: update the generator template with new patterns
