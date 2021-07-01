import React, { useState } from 'react'
import Sidebar from '../components/common/CollapsedSidebar';
import Navbar from '../components/common/Navbar'

export default function Home() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </div>
    )
}