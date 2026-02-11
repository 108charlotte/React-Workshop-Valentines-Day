import {useState, useEffect} from 'react'

function XOXO() {
    const [position, setPosition] = useState({x:0, y:0})
    const [isDragging, setIsDragging] = useState(false)

    const handleMouseDown = () => {
        setIsDragging(true)
    }

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({x: e.clientX, y: e.clientY})
        }
    }

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove)
            window.addEventListener('mouseup', () => setIsDragging(false))
            
            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
                window.removeEventListener('mouseup', () => setIsDragging(false))
            }
        }
    }, [isDragging])

    return (
        <p onMouseDown={handleMouseDown}
        style={{
            position: 'absolute',
            left: position.x + 'px',
            top: position.y + 'px', 
            cursor: 'grab', 
            width: '50px', 
            zIndex: 2, 
            userSelect: 'none'
        }}>XOXO</p>
    )
}

export default XOXO