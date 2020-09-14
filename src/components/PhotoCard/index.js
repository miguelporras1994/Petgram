import React from 'react'
import { ImgWrapper, Img, Button } from './Styles'
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg'
export const PhotoCard = ({ id, like = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/datail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' /> {like}  likes !
      </Button>
    </article>
  )
}
