export default defineEventHandler(async (event) => {
  const {data} = await $fetch('https://pokeapi.co/api/v2/berry/')

  return data
})
