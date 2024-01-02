import "../styles/about.css"
const About = () => {
    return (  
        <div className="about">
            <p>About</p>
            <h2>Objective</h2>
            <span>A highly motivated, organized and hardworking Individual seeking for a role where I can make
the best of my potential and contribute to the growth of organization.</span>
            <div className="education">
                <h2>Education</h2>
                <div className="edu">
                <div className="school">
                    <span style={{fontSize:"26px"}}>S.S.L.C</span>
                    <span>Evergreen High School</span>
                    <span>92.64%</span>
                    <span>2017</span>
                </div>
                <div className="college">
                    <span style={{fontSize:"26px"}}>Pre-University Course</span>
                    <span>Vidyadri PU College</span>
                    <span>94%</span>
                    <span>2019</span>
                </div>
                <div className="engineering">
                    <span style={{fontSize:"26px"}}>Bachelor of Computer Science and Enginerring</span>
                    <span>Sir M Visveswaraya Institute Of Technology</span>
                    <span>9 CGPA</span>
                    <span>2023</span>
                </div>
                </div>
            </div>
            <div className="strength">
                <h2>Strength</h2>
                <li>Punctual</li>
                <li>Quick Learner</li>
            </div>
            <div className="hobby">
                <h2>Hobbies</h2>
                <li>Watching WebSeries</li>
                <li>Drawing</li>
            </div>
        </div>
    );
}
 
export default About;