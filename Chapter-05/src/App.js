/*
  *
   Assignment 4 : To create Food Ordering App
*/
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";

const App = () => (
    <AppLayout />
);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);