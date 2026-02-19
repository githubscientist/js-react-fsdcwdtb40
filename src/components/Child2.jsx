import Child3 from "./Child3";

const Child2 = ({ user }) => {
    return (
        <>
            <Child3
                user={user}
            />
        </>
    )
}

export default Child2;