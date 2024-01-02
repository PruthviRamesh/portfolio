import "../styles/skills.css"
const Skills = () => {
    return ( 
        <div className="skills">
            <p style={{marginLeft:"40px"}}>Skills</p>
            <div className="sql">
                <h2>SQL</h2>
                <span>I have good Knowlegde on below SQL concepts,</span>
                <li>Operators</li>
                <li>Joins</li>
                <li>Subqueries</li>
                <li>SQL Statements</li>
                <li>Normalization</li>
            </div>
            <div className="java">
                <h2>Java</h2>
                <span>I have good Knowlegde on below Java concepts,</span>
                <li>Tokens</li>
                <li>Control and Looping Statements</li>
                <li>Methods</li>
                <li>Constructors</li>
                <li>OOPS Concept</li>
                <li>Strings and Arrays</li>
                <li>Exception Handling</li>
            </div>
            <div className="web">
                <div className="html">
                <h2>HTML</h2>
                <span>I have good Knowlegde on below HTML concepts,</span>
                <li>Multimedia Tags</li>
                <li>Lists</li>
                <li>Marquee Tag</li>
                <li>Hyperlinks</li>
                <li>Table</li>
                <li>Form</li>
                </div>
                <div className="css">
                <h2>CSS</h2>
                <span>I have good Knowlegde on below CSS concepts,</span>
                <li>Selectors</li>
                <li>Position Properties</li>
                <li>Display Properties</li>
                <li>Media Queries</li>
                <li>Transform Properties</li>
                <li>Animation</li>
                </div>
                <div className="javascript">
                <h2>Javascript</h2>
                <span>I have good Knowlegde on below Javascript concepts,</span>
                <li>Tokens</li>
                <li>operators</li>
                <li>Functions</li>
                <li>Objects</li>
                <li>Events</li>
                <li>DOM and its methods</li>
                <li>Array and Strings</li>
                </div>
            </div>
            <div className="react">
                <h2>ReactJS</h2>
                <span>I have good Knowlegde on below reactJS concepts,</span>
                <li>Props</li>
                <li>Hooks</li>
                <li>Asynch,Await and promises</li>
                <li>To access server using fetch</li>
                <li>Routers</li>
            </div>
        </div>
     );
}
 
export default Skills;