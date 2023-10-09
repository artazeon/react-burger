import { API_POST } from "./constants"

export const postOrder = (data) => {
    return fetch(API_POST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}