import ChildComponent3 from "./ChildComponent3"

const ChildComponent2 = ({ name }) => {
    return (
        <>
            <ChildComponent3
                name={name}
            />
        </>
    )
}

export default ChildComponent2;