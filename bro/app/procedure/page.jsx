import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className="py-[15] font-bold text-2xl text-slate-300 px-24">Step-by-Step Rescue Procedure of BRO</h1>
      <ol className="px-24 text-lg py-2 text-slate-400">
        <li><b>1. Assessing the Situation</b><br />Before any action is taken, the rescue team evaluates the situation on-site. Key information such as the depth of the borewell, its diameter, and the position of the victim is gathered. This assessment helps the team decide on the best rescue approach and the tools to be deployed, including the BRO device.</li>
        <li><b>2. Lowering the BRO Device into the Borewell</b><br />Once the situation is assessed, the BRO device is prepared and carefully lowered into the borewell. The device is equipped with advanced sensors, cameras, and robotic arms, designed to reach the trapped victim with precision. As the device is lowered, sensors provide real-time data on the environment inside the borewell.</li>
        <li><b>3. Real-Time Monitoring and Communication</b><br />The BRO device's real-time monitoring capability is crucial for understanding the conditions inside the borewell. Cameras provide live video feed, and sensors monitor oxygen levels, temperature, and structural stability. Communication with the victim, if possible, helps reassure them and guide them through the rescue.</li>
        <li><b>4. Stabilizing and Securing the Victim</b><br />Upon reaching the victim, the BRO device focuses on stabilizing and securing them. Oxygen can be supplied to the victim, and the robotic arm carefully grips or supports them to prevent further injuries. Throughout this phase, the victim's vital signs are monitored to ensure stability.</li>
        <li><b>5. Careful Extraction</b><br />After securing the victim, the extraction process begins. The BRO device carefully lifts the victim through the narrow borewell. The movement is slow and controlled to avoid sudden shifts that could harm the victim. In some cases, the borewell walls are stabilized to prevent collapse during the extraction.</li>
        <li><b>6. Medical Assistance Upon Extraction</b><br />Once the victim is safely extracted, medical professionals provide immediate care. Depending on the victim's condition, they may receive first aid on-site or be taken to a hospital for further treatment. The medical team ensures the victim’s well-being after the rescue.</li>
        <li><b>7. Post-Operation Analysis</b><br />After the operation, a review is conducted to analyze the rescue process. This helps improve future rescue missions. The borewell is often sealed to prevent future accidents at the same location.</li>
      </ol>
    </div>
  )
}

export default page
