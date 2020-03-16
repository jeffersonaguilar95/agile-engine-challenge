/**
 * Service to get synonymous word form datamuse API
 * @param word
 * @returns {Promise<any>}
 */
export default function getSynonyms(word) {
  return fetch(`https://api.datamuse.com/words?rel_syn=${word}`).then(function(response) {
    return response.json()
  })
}
