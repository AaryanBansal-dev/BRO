import React from 'react'
const page = () => {
  return (
    <div>
      <h1 className="py-[8] font-bold text-2xl text-slate-300 px-24">Real-time Monitoring System</h1>
      <p className="px-24 text-lg">
        The real-time monitoring system provides continuous data during the rescue operation, which is crucial for making informed decisions quickly. It includes:.</p>
        <ul className='px-24 text-lg py-2'>
          <li className="">• Visual feedback using cameras</li>
          <li className="">• Environmental sensors to monitor oxygen levels, toxic gases, and temperature</li>
          <li className="">• Position tracking of the child in the borewell</li>
        </ul>
        <h1 className="py-[8] font-bold text-2xl text-slate-300 px-24">Multi-functional Rescue Arm</h1>
        <p className="px-24 text-lg">The multi-functional rescue arm is a robotic tool designed to reach narrow and confined spaces like borewells. It can:</p>
        <ul className='px-24 text-lg py-2'>
          <li className="">• Manipulate and retrieve the trapped individual safely</li>
          <li className="">• Cut or drill obstructions to widen the borewell if needed</li>
          <li className="">• Provide life support such as oxygen or fluids during the rescue</li>
        </ul>
        <h1 className="py-[8] font-bold text-2xl text-slate-300 px-24">Safe and Efficient Extraction</h1>
        <p className="px-24 text-lg">Safe and efficient extraction ensures the child is removed without causing harm. This includes:</p>
        <ul className='px-24 text-lg py-2'>
          <li className="">• Customized extraction plans based on real-time data</li>
          <li className="">• Non-invasive tools like soft air-cushioned grips</li>
          <li className="">• Anti-collapse measures to prevent soil from falling into the borewell</li>
        </ul>
        <h1 className="py-[8] font-bold text-2xl text-slate-300 px-24">AI Integration for Decision-Making</h1>
        <p className="px-24 text-lg">AI helps automate decision-making during the rescue operation, improving precision and speed. It can:</p>
        <ul className='px-24 text-lg py-2'>
          <li>• Predict outcomes based on environmental data</li>
          <li>• Automatically control rescue equipment to avoid human error</li>
          <li>• Analyze data from previous operations to improve strategies</li>
        </ul>
    </div>
  )
}

export default page
