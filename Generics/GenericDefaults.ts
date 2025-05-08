const fetch_data = async <T = any>(url: string): Promise<T> => {
  const response = await fetch(url)
  const data = response.json()
  return data
}

type Posts = {
  userId: number
  id: number
  title: string
  body: string
}[]

// can be used when creating a generic fn.
// but not sure while implementation what data type would be used

const fetch_defaults = async () => {
  const response = await fetch_data<Posts>(
    "https://jsonplaceholder.typicode.com/posts"
  )
  console.log(response)
}
