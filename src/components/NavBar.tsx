import "../css/index.css"


function NavBar() {
    return (
        <div className ="nav-flex" style={{
            display: "flex", flexDirection: "row", alignContent: "center", flexWrap: "wrap",
        }}>
            <img src="/me.jpg" alt="Me" style={{
                height: "200px", width: "auto"
            }} />
            <div style={{
                fontSize: "30px", marginTop: "25px"
            }}>hello. i am alex.</div>
            <div>
                <div style={{
                    display: "flex", flexDirection: "row", justifyContent: "center", marginLeft: "auto", marginRight: "auto"
                }}>
                    <Button icon="github.png" title="github" url="https://github.com/Gargant0373" />
                    <Button icon="linkedin.png" title="linkedin" url="https://www.linkedin.com/in/alex-despan-a6a047239/" />
                    <Button icon="instagram.png" title="instagram" url="https://www.instagram.com/alexdespan/" />
                </div>
            </div>
        </div>

    )
}

function Button(props: ButtonProps) {
    return (
        <div style={{
            width: "100px",
            paddingLeft: "10px",
            paddingRight: "10px",
            textAlign: "center"
        }}>
            <span style={{
                padding: "5px",
                border: "1px solid #808080",
                display: "flex", alignItems: "center", justifyContent: "center",
            }} onClick={() => {
                window.open(props.url, '_blank');
            }} onMouseEnter={
                (e) => {
                    e.currentTarget.style.border = "1px solid #000"
                    e.currentTarget.style.cursor = "pointer"
                }
            } onMouseLeave={
                (e) => {
                    e.currentTarget.style.border = "1px solid #808080"
                }
            }>
                <img style={{
                    height: "20px", width: "20px", marginRight: "5px", marginTop: "auto", marginBottom: "auto"
                }} src={props.icon} alt={props.title} />
                <a>{props.title}</a>
            </span>
        </div>
    )
}

interface ButtonProps {
    icon: string;
    title: string;
    url: string;
}

export default NavBar;