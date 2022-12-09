import { UserProvider } from "./contexts/UserContext";
import { AllRoutes } from "./routes";

function App() {
  return (
    <UserProvider>
      <AllRoutes/>
    </UserProvider>
  );
}

export default App;