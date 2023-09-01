import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons'; 

import Feed from "./src/screens/Feed";
import Notifications from "./src/screens/Notifications/Notifications";
import Settings from "./src/screens/Settings/Settings";
import Payments from "./src/screens/drawerScreens/Payments";
import ChatList from "./src/screens/Chat";
import ChatListScreen from "./src/screens/ChatList/ChatListScreen";
import {
    Image,
    Pressable,
  } from "react-native";

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();
function TabsGroup({navigation}){
    return(
        <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
            // headerTitleAlign: "center",
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "ios-settings-sharp";
              } else if (route.name === "Notifications") {
                iconName = focused ? "ios-notifications" : "notifications-outline";
                } else if (route.name === "My Network") {
                iconName = focused ? "users" : "user";
                return <Feather name={iconName} size={size} color={color} />;
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#1DA1F2",
            tabBarInactiveTintColor: "gray",
          })}
        >
            <Tab.Screen name="Home" component={TopTabsGroup} 
            // options={{
            //     tabBarIcon: () => (
            //         <Ionicons name="home" color="black" size={24} />
            //     ),
            // }}
            options={{
                tabBarLabel: "hooome",
                headerLeft: () => (
                  <Pressable onPress={() => navigation.openDrawer()}>
                    <Image
                      source={require("./assets/beto.jpeg")}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 100,
                        marginLeft: 15,
                      }}
                    />
                  </Pressable>
                ),
              }}
            />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="My Network" component={Settings} />
        </Tab.Navigator>
    );
}


// Stack Navigator
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="TabsGroup" component={TabsGroup} />
      <HomeStack.Screen
        name="Payments"
        component={Payments}
        options={{
          presentation: "modal",
          headerTitle: "Tweet Details",
          headerShown: true,
        }}
      />
    </HomeStack.Navigator>
  );
}

// Drawer Navigator 
const Drawer = createDrawerNavigator();


function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} > 
      <Drawer.Screen name="HomeStackGroup" component={HomeStackGroup} />
      <Drawer.Screen name="Payments" component={Payments} options={{headerShown: true}}/>
    </Drawer.Navigator>
  )
}

// Top Tabs Navigator

const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "#1DA1F2",
        },
      }}
    >
      <TopTabs.Screen
        name="main"
        component={Feed}
        options={{
          tabBarLabel: "Feed",
        }}
      />
      <TopTabs.Screen name="Following" component={ChatListScreen} />
      <TopTabs.Screen name="👀" component={ChatList} />
    </TopTabs.Navigator>
  );
}


export default function Navigation(){
    return(
        <NavigationContainer>
            <DrawerGroup/>
        </NavigationContainer>
    );
}