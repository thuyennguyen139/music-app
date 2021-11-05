import Menu from "../../Component/Menu";
function PageAbum(){
    return(
        <>  
            <h1>Abum ne</h1>
        </>
    )
}
function Abum() {
    return (
        <>
            <Menu component={<PageAbum />}></Menu>
        </>
    )
}
export default Abum;