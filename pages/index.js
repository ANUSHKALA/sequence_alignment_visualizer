import styles from '../styles/Home.module.css'
import Input from "../components/input";
import {useState} from "react";
import Matrix from "../components/matrix";

const Home = () => {

    const [string1, setString1] = useState("");
    const [string2, setString2] = useState("");

    return (
        <div className="bg-white h-full min-h-screen flex items-center">
            <div className="flex items-center h-screen bg-gray-800 justify-center w-1/2">
                <div className="flex flex-col w-min gap-16">
                    <div className="text-white opacity-20 text-8xl font-bold">Sequence Alignment Visualizer</div>
                    <div className="flex flex-col gap-4">
                        <Input label="Sequence 1" handleKeyword={setString1}/>
                        <Input label="Sequence 2" handleKeyword={setString2}/>
                    </div>
                </div>
            </div>
            <main className="my-16 text-gray-800 flex justify-center w-1/2">
                <Matrix sequence1={string1} sequence2={string2}/>
            </main>

        </div>
    )
}

export default Home
