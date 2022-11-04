export const getImage = (path) => {
  try{
    return require(`@/assets/${path}`)
  } catch (e){
    console.log(path)
    return require('@/assets/naniens/no.png')
  }
}
