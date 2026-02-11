import Card from './Card.tsx'

import Sticker from './Sticker.tsx'
import './App.css'

function App() {

  const imageSrcs = [
'https://i.pinimg.com/originals/1b/58/31/1b5831dbd8900841d372d9b66a62156a.gif',
'https://i.pinimg.com/originals/4d/b8/3e/4db83e362eb13a0f7c29513986c70603.gif',
'https://freepngimg.com/save/22279-cute-cat/828x957',
'https://static.vecteezy.com/system/resources/thumbnails/035/149/157/small/ai-generated-cute-kitty-cat-with-christmas-hat-no-background-perfect-for-print-on-demand-merchandise-png.png',
'https://png.pngtree.com/png-clipart/20250825/original/pngtree-hyper-realistic-wet-red-lips-with-tongue-out-on-white-background-png-image_21387485.png',
'https://png.pngtree.com/png-clipart/20240913/original/pngtree-grimacing-face-emoji-realistic-3d-on-transparent-png-image_16002009.png'
]

  const sizes = [
    50, 300, 100, 100, 20
  ]


  return (
    <>
      <Card/>
      {imageSrcs.map((image, i) => (
        <Sticker key={image} imageSrc={image} size = {sizes[i]}/>
      ))}
     
    </>
  )
}

export default App
