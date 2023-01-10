import {BsPencil, BsTrash} from 'react-icons/bs'

function Task({title, handleCheckbox, id}) {

    const handleChange = () =>{
        handleCheckbox(id)
        console.log(id)
    }

    return (<div className="grid grid-cols-12 gap-2">
            <div className="col-start-3">
                <input type={"checkbox"} onChange={handleChange}/>
            </div>
            <div className="col-start-4 col-span-2 flex">
                <p>{title}</p>
            </div>
            <div className="col-start-11 flex">
                <div className="mr-2" >
                    <BsPencil/>
                </div>
                <div onClick={handleChange}>
                    <BsTrash/>
                </div>
            </div>
        </div>
    )
}

export default Task;