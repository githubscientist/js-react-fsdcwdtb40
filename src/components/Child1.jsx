import Child2 from "./Child2";

const Child1 = ({ user }) => {

    return (
        <>
            <Child2
                user={user}
            />
        </>
    )
}

export default Child1;