import React, {useState, useEffect, useRef} from 'react'

function Sticker(props: {imageSrc?: string, size?: number, text?: string}) {

    const intX = Math.random() * (window.innerWidth/2)
    const intY = Math.random() * (window.innerHeight/2)
 
    const [position, setPosition] = useState({x: intX, y: intY})
    const [isDragging, setIsDragging] = useState(false)
    const offset = useRef({x: 0, y: 0})

    const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
       //makes the image dragging less buggy
        e.preventDefault() 

        offset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y
        }
        setIsDragging(true)
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
        e.preventDefault()
        const t = e.touches[0]
        offset.current = {
            x: t.clientX - position.x,
            y: t.clientY - position.y
        }
        setIsDragging(true)
    }

    useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - offset.current.x,
                    y: e.clientY - offset.current.y
                })
            }
        }

        const handleMouseUp = () => {
            setIsDragging(false)
        }

        const handleTouchMove = (e: TouchEvent) => {
            if (isDragging) {
                const t = e.touches && e.touches[0]
                if (t) {
                    setPosition({
                        x: t.clientX - offset.current.x,
                        y: t.clientY - offset.current.y
                    })
                }
            }
        }

        const handleTouchEnd = () => {
            setIsDragging(false)
        }

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove)
            window.addEventListener('mouseup', handleMouseUp)
            window.addEventListener('touchmove', handleTouchMove, {passive: false})
            window.addEventListener('touchend', handleTouchEnd)
            
            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
                window.removeEventListener('mouseup', handleMouseUp)
                window.removeEventListener('touchmove', handleTouchMove as EventListener)
                window.removeEventListener('touchend', handleTouchEnd)
            }
        }
    }, [isDragging])

    return (
        props.text ? (
            <h1
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                style={{
                    position: 'absolute',
                    left: position.x + 'px',
                    top: position.y + 'px',
                    cursor: 'grab',
                    zIndex: 2,
                    color: 'white',
                    touchAction: 'none'
                }}
            >
                {props.text}
            </h1>
        ) : (
            <img
                src={props.imageSrc}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                style={{
                    position: 'absolute',
                    left: position.x + 'px',
                    top: position.y + 'px',
                    cursor: 'grab',
                    zIndex: 2,
                    width: props.size ? props.size + 'px' : '100px',
                    touchAction: 'none'
                }}
            />
        )
    )
}

export default Sticker