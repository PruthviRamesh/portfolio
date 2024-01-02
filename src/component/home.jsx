const Home = () => {
    return (  
        <div className="home">
            <div className="intro">
                <p>Hi,I am <span style={{color:"lawngreen",fontSize:"48px",fontWeight:"600"}}>Pruthvi</span></p>
                <p>From Devanahalli,</p>
                <p>Karnataka.</p><br />
                <a href="" className="view">View Resume</a>
            </div>
            <img src="/women.png" alt=""  className="profileimg"/>
        </div>
    );
}
 
export default Home;