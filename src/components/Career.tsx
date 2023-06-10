
function Career() {
    return <div style={{
        display: "flex", flexDirection: "column", alignItems: "center"
    }}>
        <CareerDisplay title="highschool" description="i graduated highschool in brasov, romania with 9.4 on the baccalaurate exam." date="2022" />
        <CareerDisplay title="university" description="i am currently studying computer science and engineering at tu delft. i started studying in 2022 and so far I have developed
        many skils that I consider very useful for my career." date="2025" />
        <CareerDisplay title="spigot development" description="my passion for coding started with minecraft. me and my friend learned together how to write spigot minecraft plugins in Java." date="2018" />
        <CareerDisplay title="oop project" description="in uni me and my team had to develop a trello copy called talio. we used javafx and spring and ended up getting an 8.5 for the assignment." date="2023" />
    </div >
}

function CareerDisplay(props: CareerDisplayProps) {
    return <div style={{
        display: "flex", flexDirection: "column", padding: "10px"
    }}>
        <div style={{
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px"
        }}>{props.title} - {props.date}</div>
        <div style={{
            width: "500px",
            textAlign: "justify",
        }}>
            {props.description}
        </div>
    </div>
}

interface CareerDisplayProps {
    title: string;
    description: string;
    date: string;
}

export default Career;