export const getGif = async(categoria) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=cnE8pJY4Y4E6T5CTX56VjvqHvA5nHfLm`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    return gifs;
  }