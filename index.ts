import { registerRootComponent } from 'expo';

import App from './App';
import Santander from './app/screens/Santander';
import ControlSistema from './app/screens/botton';
import Appcalculadora from './app/screens/calculadora';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Appcalculadora);
