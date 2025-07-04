import { useEffect, useState } from 'react'
import axios from 'axios'

type Listing = {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
}

const Listings = () => {
  const [listings, setListings] = useState<Listing[]>([]) // 👈 use the type here

  useEffect(() => {
    axios
      .get<Listing[]>('/api/listings')
      .then((res) => {
        console.log('Fetched listings:', res.data)
        setListings(res.data)
      })
      .catch((err) => {
        console.error('Error fetching listings:', err)
      })
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((item) => (
          <div key={item.id} className="bg-white rounded-lg p-4 shadow">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-green-600 font-bold">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Listings
