import heartsImage from './assets/hearts.png'
import {useState, useEffect} from 'react'

function Hearts() {
    const [position, setPosition] = useState({x:0, y:0})
    const [isDragging, setIsDragging] = useState(false)

    const handleMouseDown = () => {
        setIsDragging(true)
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                setPosition({x: e.clientX, y: e.clientY})
            }
        }

        const handleMouseUp = () => {
            setIsDragging(false)
        }

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove)
            window.addEventListener('mouseup', handleMouseUp)
            
            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
                window.removeEventListener('mouseup', handleMouseUp)
            }
        }
    }, [isDragging])

    return (
        <img src={heartsImage} onMouseDown={handleMouseDown}
        style={{
            position: 'absolute',
            left: position.x + 'px', 
            top: position.y + 'px', 
            cursor: 'grab', 
            zIndex: 2, 
            width: '50px'
        }}/>
    )
}

export default Hearts