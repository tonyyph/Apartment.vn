/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import HomeScreen from '../screens/HomeScreen';
import LinkingConfiguration from './LinkingConfiguration';
import AccountScreen from '../screens/AccountScreen';
import BookingScreen from '../screens/BookingScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import DetailsScreen from '../screens/DetailsScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Detail" component={DetailsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].cyan,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          headerShown: false,
          headerStyle: {
            backgroundColor: Colors[colorScheme].cyan,
          },
          headerTintColor: Colors[colorScheme].black,
          isHome: true,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Detail')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialCommunityIcons name={'information-variant'} size={25} style={{ marginRight: 15 }} />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Detail"
        component={DetailsScreen}
        options={({ navigation }: RootTabScreenProps<'Detail'>) => ({
          title: 'Detail',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="allergy" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={({ navigation }: RootTabScreenProps<'Account'>) => ({
          title: 'Account',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="account" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Booking"
        component={BookingScreen}
        options={({ navigation }: RootTabScreenProps<'Booking'>) => ({
          title: 'Booking',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="contactless-payment-circle" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={({ navigation }: RootTabScreenProps<'Favorite'>) => ({
          title: 'Favorite',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  // return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}
