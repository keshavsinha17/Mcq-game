import React,{useState,useEffect} from 'react'
import { FaDollarSign } from "react-icons/fa";
import "./Sidebar.css"
const data = [
    { id: 0, label: "Istanbul, TR (AHL)" },
    { id: 1, label: "Paris, FR (CDG)" }
];
const SideBar = () => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItems] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        setSelectedItem(selectedItem === id ? null : id);
        setOpen(false);  // Close the dropdown after selecting an item
    }
    return (
        <div className='payments_section'>
            <div className='av_amount'>
                <button>$2000</button>
            </div>
            <div className='dropdown'>
            <p>Mines</p>
                <div className='dropdown-header' onClick={toggleDropdown}>
                    {selectedItem !== null ? items.find(item => item.id === selectedItem).label : "3"}
                    <i className={`fa fa-chevron-right icon ${isOpen ? "open" : ""}`}></i>
                </div>
                {isOpen && (
                    <div className='dropdown-body'>
                        {items.map(item => (
                            <div key={item.id} className="dropdown-item" onClick={() => handleItemClick(item.id)}>
                                <span className={`dropdown-item-dot ${item.id === selectedItem ? 'selected' : ''}`}>• </span>
                                {item.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    )
}

export default SideBar
