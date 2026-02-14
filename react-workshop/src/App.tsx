import Card from './Card.tsx'

import Sticker from './Sticker.tsx'
import './App.css'

function App() {

  const imageSrcs = [
    'https://i.pinimg.com/originals/1b/58/31/1b5831dbd8900841d372d9b66a62156a.gif',
    'https://i.pinimg.com/originals/4d/b8/3e/4db83e362eb13a0f7c29513986c70603.gif',
    'https://freepngimg.com/save/22279-cute-cat/828x957',
    'https://static.vecteezy.com/system/resources/thumbnails/035/149/157/small/ai-generated-cute-kitty-cat-with-christmas-hat-no-background-perfect-for-print-on-demand-merchandise-png.png',
    'https://mystickermania.com/cdn/stickers/158-512x512.png',
    'https://raw.githubusercontent.com/108charlotte/React-Workshop-Valentines-Day/24b18d5303cf47d6caf263820a80cefc3321d97b/react-workshop/src/assets/hearts.png'
    ]

  const sizes = [
    50, 300, 100, 100, 20
  ]


  return (
    <>
      <Card/>
      {imageSrcs.map((image, i) => (
        <Sticker key={image} imageSrc={image} size={sizes[i]}/>
      ))}
    <Sticker text={'xoxo'}/> 
    </>
  )
}

export default App
