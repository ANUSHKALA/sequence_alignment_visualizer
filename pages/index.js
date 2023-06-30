import styles from '../styles/Home.module.css'
import Input from "../components/input";
import {useState} from "react";

const Home = () => {
    const [string1, setString1] = useState("");
    const [string2, setString2] = useState("");

    console.log(string1);
    console.log(string2);
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Input handleKeyword={setString1} />
        <Input handleKeyword={setString2} />
      </main>

    </div>
  )
}

export default  Home
