import styles from "./styles/App.module.css";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div className={styles.container}>
      <Resume />
    </div>
  );
};

export default App;
