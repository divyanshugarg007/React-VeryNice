import { useState } from 'react'
import '../App.css'

const DataFetch = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name: inputName, value } = e.target;
        if (inputName === "name") {
            setName(value);
        } else if (inputName === "age") {
            setAge(value);
        }
    }

    const handleSubmit = () => {
        if (name && age) {
            const obj = {
                name: name,
                age: age
            }
            setData([...data, obj]);
            setName("");
            setAge("");
        }
    }

    return (
        <div className="data-fetch-container">
            <div className="input-container">
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={handleChange} 
                    placeholder="Enter name"
                />
                <input 
                    type="number" 
                    name="age" 
                    value={age} 
                    onChange={handleChange} 
                    placeholder="Enter age"
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div className="user-list-container">
                <h2>User List</h2>
                <div className="user-list">
                    {data.map((item, index) => (
                        <div key={index} className="user-item">
                            <p><strong>Name:</strong> {item.name}</p>
                            <p><strong>Age:</strong> {item.age}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DataFetch