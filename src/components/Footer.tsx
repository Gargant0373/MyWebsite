
function Footer() {
    return <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
    }}>
        <a style={{
            fontSize: "20px"
        }}> contact </a>
        <div style={{
            display: "flex", flexDirection: "row", justifyContent: "center"
        }}>
            <FooterItem icon="/discord.png" title="gargant" />
            <FooterItem icon="/mail.png" title="gargant0373@gmail.com" />
        </div>
    </div>
}

function FooterItem(props: FooterItemProps) {
    return <div style={{
        padding: "10px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"
    }}>
        <img src={props.icon} alt={props.title} style={{
            height: "20px", width: "20px", marginRight: "5px", marginTop: "auto", marginBottom: "auto"
        }} />
        <a>{props.title}</a>
    </div>
}

interface FooterItemProps {
    icon: string;
    title: string;
}

export default Footer;