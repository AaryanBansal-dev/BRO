'use client'

import { useState } from 'react'

export default function LoginForm() {
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowAlert(true)
    // Reset form fields
    event.target.reset()
    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
      {showAlert && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          Thank you for your request. We will get back to you shortly.
        </div>
      )}
    </div>
  )
}

