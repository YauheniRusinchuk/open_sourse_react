class GetApi {
  static getNewApi() {
    return fetch('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=3853fddd2e404e7aa7739c1bb86c602c')
            .then(response => {
              return response.json();
            }).catch(error => {
              return error;
            })
    }
}

export default GetApi;
