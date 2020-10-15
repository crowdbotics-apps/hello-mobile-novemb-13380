import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen012358Navigator from '../features/BlankScreen012358/navigator';
import BlankScreen112357Navigator from '../features/BlankScreen112357/navigator';
import BlankScreen312325Navigator from '../features/BlankScreen312325/navigator';
import BlankScreen212319Navigator from '../features/BlankScreen212319/navigator';
import BlankScreen112317Navigator from '../features/BlankScreen112317/navigator';
import BlankScreen012313Navigator from '../features/BlankScreen012313/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen012358: { screen: BlankScreen012358Navigator },
BlankScreen112357: { screen: BlankScreen112357Navigator },
BlankScreen312325: { screen: BlankScreen312325Navigator },
BlankScreen212319: { screen: BlankScreen212319Navigator },
BlankScreen112317: { screen: BlankScreen112317Navigator },
BlankScreen012313: { screen: BlankScreen012313Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
