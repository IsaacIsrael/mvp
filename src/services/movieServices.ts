class MovieServices {


  async fetchAll(title: string): Promise<Movie[]> {
       
   const response  = await fetch(`https://imdb-api.com/API/AdvancedSearch/k_szq3s5n1/?title=${title}`, {
        method: 'GET',
        redirect: 'follow'
    });
    const responseTest = await response.text()
    const data = JSON.parse(responseTest)
    const {results} = data

    return results || []
  }

}

const movieServices = new MovieServices();
export default movieServices;
