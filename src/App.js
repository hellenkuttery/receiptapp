import './App.css';
import RecipeProvider from './Context/RecipeProvider';
import AppRouter from './Router/AppRouter';

function App() {
  return (
  <RecipeProvider>
    <AppRouter/>
  </RecipeProvider>
  );
}

export default App;
