import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './components/RootNavigator';

const App: React.FC = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);

export default App;
