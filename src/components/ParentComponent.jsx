import ChildComponent1 from "./ChildComponent1"

const ParentComponent = ({ name }) => {

    return (
        <>
            <ChildComponent1
                name={name}
            />
        </>
    )
}

export default ParentComponent