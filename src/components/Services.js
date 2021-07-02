import Card from "./Card"
function Services()
{
    return (
    <div className="services">
        <p className="text-muted text-sub-title text-center">What can i do for you</p>
        <h2 className="sub-title text-muted">SERVICES</h2>
        <br></br>
        <div className="row">
            <Card 
            text="Web Design" 
            img="fas fa-desktop"  
            description="Nullam placerat ipsum sed gravida luctus. Praesent posuere justo eget est posuere posuere"
            />

            <Card 
            text="Web Application" 
            img="fas fa-code"  
            description="Mauris eget ipsum in odio pellentesque elementum."
             />

            <Card 
            text="Web SEO" 
            img="fas fa-rocket" 
            description="Ligula tortor egestas ipsum, mattis faucibus magna erat sed dui. Phasellus eget lacus maximus, ornare massa vel, tempor ipsum."
            />
        </div>
     </div>
    )
}
export default Services