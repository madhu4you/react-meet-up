import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Todolist from "./pages/Todolist";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} exact />
          <Route path="/new" element={<NewMeetup />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/todos" element={<Todolist />} />
        </Routes>
      </Layout>
  );
}

export default App;
