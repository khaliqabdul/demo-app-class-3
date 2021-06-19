import React from 'react';
import './App.css';

const img1 = "https://picsum.photos/210/150";
const img2 = "https://picsum.photos/200/150";

//heading object for inline css
const heading = {
    textAlign: 'center',
    textTransform: 'capitalize',
    textShadow: '0px 2px 4px gold',
    margin: '10vh',

    fontFamily: 'Roboto, sans-serif'
}

function Links() {
    return (
        <>
            <div style={heading}>
                <img src={img1} alt="randomImage" align="Right" />
                <h1> Important PIAIC Links</h1>
                <h2 className="h2"> PIAIC Portal </h2>
                <ol>
                    <p className="a">
                        <li><a target="_khaliq" href="https://portal.piaic.org/">PIAIC Student Portal</a></li>
                        <li><a target="_abdul" href="mailto:education@piaic.org">Email to PIAIC</a></li>
                        <li><a target="_khaliq" href="https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax">Mark Down Language (Basic writing and formatting syntax)</a></li>
                        <li><a target="_khaliq" href="https://github.com/panacloud/learn-multicloud-serverless-development"> panacloud /learn-multicloud-serverless-development </a></li>
                        <li><a target="_khaliq" href="https://panacloud.github.io/bootcamp-2020/">bootcamp-2020</a></li>
                        <li><a target="_khaliq" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"><em>Learn HTML by Hira Khan</em></a></li>
                        <li><a target="_khaliq" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"><em>Learn CSS by Hira Khan</em></a></li>
                        <li><a target="_khaliq" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"><em>Learn JavaScript by Zeeshan Hanif</em></a></li>
                        <li><a target="_khaliq" href="https://docs.google.com/presentation/d/1D44MyYxJls_-voXOCGKwYr6rCGdE1yYfzeXh5K33mfM/edit#slide=id.p"><em>Learn React by Aamir Pinger (Slides)</em></a></li>
                        <ul>
                            <li><a target="_khaliq" href="https://daveceddia.com/react-getting-started-tutorial/"><em>A Complete React Tutorial for 2020, Book by Dave Ceddia</em></a></li>
                            <li><a target="_khaliq" href="https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ">React JS Tutorial in Hindi 2020 by Vinod Thapa</a></li>
                        </ul>
                        <li><a target="_khaliq" href="https://results.piaic.org/">PIAIC Results Portal</a></li>
                    </p>
                </ol>
            </div>
            <div className="h2">
                <img src={img2} alt="randomImage" align="Right" />
                <h2> My React Projects </h2>
                <ol>
                    <p className="a">
                        <li><a target="_khaliq" href="https://bootcamp2020_example.surge.sh/">important PIAIC Links</a></li>
                        <ul>
                            <li><a target="_khaliq" href="https://github.com/khaliqabdul/Bootcamp2020Example">Github Link</a></li>
                        </ul>
                        <li><a target="_khaliq" href="http://bootcamp2020_session2.surge.sh/">Hello React class-2</a></li>
                        <ul>
                            <li><a target="_khaliq" href="https://github.com/khaliqabdul/bootcamp-hello-react-class-2">Github Link</a></li>
                        </ul>
                        <li><a target="_khaliq" href="http://bootcamp_session-3.surge.sh/">Important Links in React</a></li>
                        <ul>
                            <li><a target="_khaliq" href="https://github.com/khaliqabdul/demo-app-class-3">Github Link</a></li>
                        </ul>
                        <li><a target="_khaliq" href="http://bootcamp2020-reactproject001.surge.sh/">SurgeLink BootCamp 2020 React Project-1</a></li>
                        <ul>
                            <li><a target="_khaliq" href="https://github.com/khaliqabdul/BootCamp2020-React_Project001">Github Link</a></li>
                        </ul>
                        <li><a target="_khaliq" href="http://bootcamp2020-reactproject002.surge.sh/">SurgeLink BootCamp 2020 React Project-2</a></li>
                        <ul>
                            <li><a target="_khaliq" href="https://github.com/khaliqabdul/BootCamp2020-React_Project002">Github Link</a></li>
                        </ul>
                        <li><a target="_khaliq" href="http://bootcamp2020-reactproject003.surge.sh/">SurgeLink BootCamp 2020 React Project-3</a></li>
                        <ul>
                            <li><a target="_khaliq" href="https://github.com/khaliqabdul/BootCamp2020-React_Project003">Github Link</a></li>
                        </ul>
                    </p>
                </ol>

            </div>
        </>
    )
}


export default Links;