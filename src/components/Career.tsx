import "../css/index.css"

function Career() {
    return <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "25px"
    }}>
        <CareerDisplay title="spigot development" description="my passion for coding started with minecraft. me and my friend learned together how to write spigot minecraft plugins in Java." date="2018" />
        <CareerDisplay title="summer camp counselor" description="I spent 11 days along 4 other team members working with the 30 young adult participants towards making them see their own beauty and value." date="2021" />
        <CareerDisplay title="highschool" description="i graduated highschool in brasov, romania with 9.4 on the baccalaurate exam." date="2022" />
        <CareerDisplay title="teaching assistant" description="i worked as a TA for the courses Computer Organization, Reasoning and Logic and Object Oriented Programming at TU Delft" date="2023" />
        <CareerDisplay title="university" description="i am currently studying computer science and engineering at tu delft. i started studying in 2022 and so far I have developed
        many skils that I consider very useful for my career." date="2025" />
    </div >
}

function CareerDisplay(props: CareerDisplayProps) {
    return <div style={{
        display: "flex", flexDirection: "column", padding: "10px"
    }}>
        <div className="career" style={{
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px"
        }}>{props.title} - {props.date}</div>
        <div className="career" style={{
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