import PageHeader from "../src/components/page-header/page-header";
import PageBody from "../src/components/page-body/page-body";
import "../src/assets/styles/colors.css";
import "../src/assets/styles/fonts.css";
import "./App.css";

export default function App() {
  console.log("App is runing!");
  return (
    <div className="App">
      <div className="card-body">
        <PageHeader></PageHeader>
        <PageBody></PageBody>
      </div>
    </div>
  );
}