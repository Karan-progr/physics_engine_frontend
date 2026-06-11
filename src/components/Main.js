import "./Main.css";

import { useState } from "react";

function Main () {

    const [activeTab, setActiveTab] = useState("Create");
    const tabContents = {
        "Create":"Create simulation with full freedom",
        "Run":"Run the simulation in you browser natively",
        "Share":"Upload your simulation in public and share it with your friends",
        "Save":"Save your simulation to recall anytime"
    }

    return (
        <main>
            <div className="togMenu">
                <ul className="toggleMenu">
                    <li><button className={ activeTab === "Create"? "active" : "" } onClick={ () => setActiveTab("Create") }>Create</button></li>
                    <li><button className={ activeTab === "Run"? "active" : "" } onClick={ () => setActiveTab("Run") }>Run</button></li>
                    <li><button className={ activeTab === "Share"? "active" : "" } onClick={ () => setActiveTab("Share") }>Share</button></li>
                    <li><button className={ activeTab === "Save"? "active" : "" } onClick={ () => setActiveTab("Save") }>Save</button></li>
                </ul>
                <p className="toggleContent">{ tabContents[activeTab] }</p>
            </div>
            <h1 className="SignUp">Sign-up Now</h1>
            <div className="contributeForm">
                <div className="msg">
                    <h1>
                        Contribute to project
                    </h1>
                    <p>
                    phy2D is a open source physics simulation tool designed for students teachers and researchers world-wide.
                    Here I used Canvas2D javascript library to render 2D graphics in the browser.
                    If you want to contribute to this project kindy fill out the form.
                    </p>
                </div>

                <form>
                    <div class="form_inp">
                    <input id="FirstName" type="text"  placeholder=" "></input>
                    <label for="FirstName">FirstName</label></div>

                    <div class="form_inp">
                    <input id="LastName" type="text"  placeholder=" "></input>
                    <label for="LastName">LastName</label></div>

                    <div class="form_inp">
                    <input id="GitHubProfile" type="text"  placeholder=" "></input>
                    <label for="GitHubProfile">GitHub UserName</label></div>

                    <div class="form_inp">
                    <textarea id="About" type="text"  placeholder=" "></textarea><label for="About">About yourself</label></div>

                    <button type="submit">
                        Contribute
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Main;