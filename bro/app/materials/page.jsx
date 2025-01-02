import React from 'react'
import "./style.css";
const page = () => {
  return (
    <div>
      <h1 className="py-[8] font-bold text-2xl text-slate-300 px-24">Materials Used</h1><br />
      <center><table style={{borderCollapse: 'collapse', width: '30%'}}>
  <thead>
    <tr style={{backgroundColor: '#0f172a'}}>
      <th style={{border: '1px solid #ddd', padding: '8px'}}>Materials</th>
      <th style={{border: '1px solid #ddd', padding: '8px'}}>Purpose</th>
    </tr>
  </thead>
  <tbody>
  <tr style={{backgroundColor: '#334155'}}>
      <td style={{border: '1px solid #ddd', padding: '8px'}}>Stainless Steel</td>
      <td style={{border: '1px solid #ddd', padding: '8px'}}>Structural Framework</td>
    </tr>
    <tr style={{backgroundColor: '#334155'}}>
      <td style={{border: '1px solid #ddd', padding: '8px'}}>Carbon Fiber</td>
      <td style={{border: '1px solid #ddd', padding: '8px'}}>Lightweight Components</td>
    </tr>
    <tr style={{backgroundColor: '#334155'}}>
      <td style={{border: '1px solid #ddd', padding: '8px'}}>Hydraulic Systems</td>
      <td style={{border: '1px solid #ddd', padding: '8px'}}>Rescue Arm Operation</td>
    </tr>
  </tbody>
</table></center>
<br /><br /><br />
    </div>
  )
}

export default page
