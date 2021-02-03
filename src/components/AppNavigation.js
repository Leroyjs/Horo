import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { MainPage } from './Screens/MainPage';
import { ZodiacSignPage } from './Screens/ZodiacSignPage';
import { CompatibilityConfigurationPage } from './Screens/CompatibilityConfigurationPage';
import { CompatibilityPage } from './Screens/CompatibilityPage';
import { FriendsPage } from './Screens/FriendsPage';
import { MenuPage } from './Screens/MenuPage';
import { AllZodiacSignsPage } from './Screens/AllZodiacSignsPage';
import { SettingsPage } from './Screens/SettingsPage';
import { EditProfilePage } from './Screens/EditProfilePage';

const Navigator = createStackNavigator(
    {
        Main: MainPage,
        ZodiacSign: ZodiacSignPage,
        Zodiac: MainPage,
        CompatibilityConfiguration: CompatibilityConfigurationPage,
        Compatibility: CompatibilityPage,
        Friends: FriendsPage,
        Menu: MenuPage,
        AllZodiacSigns: AllZodiacSignsPage,
        Settings: SettingsPage,
        EditProfile: EditProfilePage,
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',
    }
);

export const AppNavigation = createAppContainer(Navigator);
