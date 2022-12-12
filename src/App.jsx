import { TechProvider } from "./contexts/TechContext";
import { UserProvider } from "./contexts/UserContext";
import { AllRoutes } from "./routes";

function App() {
  return (
    <UserProvider>
      <TechProvider>
        <AllRoutes/>
      </TechProvider>
    </UserProvider>
  );
}

export default App;