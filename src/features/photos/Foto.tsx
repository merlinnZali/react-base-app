import React, { useEffect } from 'react'
import { photosSelector, getPhotos } from './PhotoSlice'
import { useSelector, useDispatch } from 'react-redux'

interface FotoProps {
  value?: any
}

const Foto = /* FC<FotoProps> */ (/* {value} */) => {
  const dispatch = useDispatch()
  const { photos, loading, errors } = useSelector(photosSelector)

  console.log(photos)
  console.log(`loading: ${loading}`)
  console.log(`errors: ${errors}`)

  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  console.log(photos, loading, errors)

  return <div className="App">Hello world</div>
}

export default Foto
