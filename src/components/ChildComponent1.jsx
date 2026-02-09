import ChildComponent2 from "./ChildComponent2"

const ChildComponent1 = ({ name }) => {
    return (
        <>
            <ChildComponent2
                name={name}
            />
        </>
    )
}

export default ChildComponent1