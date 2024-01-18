import React, { useContext } from "react";
import Container from "./components/Container";
import CourseTable from "./components/CourseTable";
import CreateDrawer from "./components/CreateDrawer";
import EditDrawer from "./components/EditDrawer";
import Header from "./components/Header";
import { DataContext } from "./contexts/DataContextProvider";

const App = () => {
  const { editDrawer } = useContext(DataContext);

  return (
    <Container>
      <Header />
      <CourseTable />
      <CreateDrawer />
      
      {editDrawer && <EditDrawer />}
    </Container>
  );
};

export default App;
