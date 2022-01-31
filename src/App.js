import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Main from "./components/Main";
import { useState } from "react";
function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <StyledApp>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Main toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </StyledApp>
  );
}
const StyledApp = styled.div`
  position: relative;
  width: 100%;
`;

export default App;
