
// APIHelper.js
import axios from 'axios';

  /**
   * Requests a URL, returning a promise
   *
   * @param  {string} url       The URL we want to request
   * @param  {object} [options] The options we want to pass to "fetch"
   *
   * @return {Promise}           The request promise
   */
 
  export default function getServiceData(query) {
    const prepareURL =  'https://www.adidas.co.uk/api/suggestions/' + query;
    return  axios(prepareURL)
    .then(function (response) {     
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

