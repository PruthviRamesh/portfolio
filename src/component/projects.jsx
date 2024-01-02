import "../styles/projects.css"
const Projects = () => {
    return ( 
        <div className="projects">
            <p>projects</p>
            <div className="project2">
                <p>Pneumonia Detection Using Image Processing(Nov 2022 - April 2023)</p>
                <span>In this project, we leverage deep learning techniques to automatically classify X-ray
                    images into normal, bacterial pneumonia, viral pneumonia and COVID-19 classes.
                    Convolutional neural network (CNN) architecture has been fine-tuned for the specific task of
                    pneumonia and COVID-19 detection.</span>
                <img src="/pneumonia.png" alt="" />
            </div>
            <div className="project1">
                <p>Child Vaccination Management System (Nov 2021 – Jan 2022)</p>
                <span>Child Vaccination Management System focuses on appointment booking and storing the
                    data of the child. The basic purpose of designing Child Vaccination Management System is to
                    get rid from manual entry and record system and try to give easy and simple database
                    management system for clinics</span>
                <img src="/vaccine.jpg" alt="" />
            </div>
        </div>
     );
}
 
export default Projects;