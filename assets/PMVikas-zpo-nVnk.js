import{j as e,m as r}from"./index-BFoVASJk.js";const g=[{date:"2026-07-14",title:"Portfolio Refinement & Setup",content:`Set up the PMVikas tracking page on my portfolio. This is where I'll log daily activities, learnings, and progress throughout the PMVikas course.

Key focus areas for the course: systems thinking, project management, and hands-on development workflows.`,tags:["setup","portfolio"]},{date:"2026-06-19",title:"Day 01 — Introduction to IoT & Ecosystem",content:`Inauguration of the PM-VIKAS IoT Assistant Training Program.
Introduction to IoT ecosystem, nodes, and device-to-cloud architecture.
Overview of smart cities, smart grids, and real-world IoT applications.
Studied communication layers used in IoT systems.`,tags:["IoT","overview"]},{date:"2026-06-20",title:"Day 02 — Microcontroller Architectures & Arduino IDE",content:`Studied Arduino Uno and ESP32 architectures.
Installed and configured Arduino IDE.
Learned board and port configuration.
Wrote basic C/C++ programs and uploaded LED Blink to the board.`,tags:["Arduino","ESP32","C/C++"]},{date:"2026-06-22",title:"Day 03 — Basic Electronic Components",content:`Learned about resistors, capacitors, and LEDs.
Understood component specifications and practical applications.
Performed breadboard wiring exercises.
Built simple circuits following standard design practices.`,tags:["electronics","breadboard"]},{date:"2026-06-23",title:"Day 04 — Hardware Measurement & GPIO",content:`Explored digital and analog GPIO pins.
Configured GPIOs for input and output operations.
Measured voltage, current, and resistance using a digital multimeter.
Verified electrical parameters in practical circuits.`,tags:["GPIO","hardware"]},{date:"2026-06-24",title:"Day 05 — Interfacing LDR (Light Sensor)",content:`Interfaced an LDR with Arduino.
Read ambient light intensity using analog inputs.
Programmed threshold-based lighting control.
Triggered outputs based on changing light conditions.`,tags:["sensors","LDR","Arduino"]},{date:"2026-06-25",title:"Day 06 — Interfacing DHT11 Temperature & Humidity Sensor",content:`Connected and programmed the DHT11 sensor.
Measured temperature and humidity.
Implemented basic data validation to reduce noise.
Formatted sensor readings for transmission.`,tags:["sensors","DHT11"]},{date:"2026-06-26",title:"Day 07 — ESP32 Wi-Fi & Network Protocols",content:`Configured ESP32 Wi-Fi module.
Connected ESP32 to a wireless network in Station (STA) mode.
Learned IP addressing concepts.
Studied TCP client-server communication for IoT applications.`,tags:["ESP32","Wi-Fi","networking"]},{date:"2026-06-27",title:"Day 08 — Blynk IoT Cloud Setup",content:`Created a Blynk IoT Cloud account and configured device templates.
Created virtual datastreams and generated auth tokens.
Built a basic mobile dashboard for remote monitoring.`,tags:["Blynk","cloud","dashboard"]},{date:"2026-06-29",title:"Day 09 — Real-Time Cloud Telemetry with Blynk",content:`Connected ESP32 to Blynk Cloud.
Uploaded LDR and DHT11 data in real time.
Verified remote monitoring through mobile widgets.
Observed low-latency cloud communication.`,tags:["Blynk","telemetry","ESP32"]},{date:"2026-06-30",title:"Day 10 — ThingSpeak Data Logging & Capstone Project",content:`Integrated ESP32 with ThingSpeak cloud.
Logged sensor readings for long-term storage.
Visualized data using ThingSpeak graphs.
Developed a Smart Home System integrating sensors and relay control as the internship capstone project.`,tags:["ThingSpeak","capstone","smart-home"]}];function h(n){const a=new Map;for(const i of n){const[s,o]=i.date.split("-").map(Number),t=`${s}-${String(o).padStart(2,"0")}`;a.has(t)||a.set(t,[]),a.get(t).push(i)}return a}const y=["January","February","March","April","May","June","July","August","September","October","November","December"];function v(n){const[a,i]=n.split("-").map(Number);return`${y[i-1]} ${a}`}function k(n,a){if(!n||!a)return!1;const[i,s,o]=n.split("-").map(Number),[t,c,l]=a.split("-").map(Number);return i===t&&s===c&&o===l}const m=new Date,f=`${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,"0")}-${String(m.getDate()).padStart(2,"0")}`;function x(){const n=[...g].reverse(),i=[...h(n).entries()].sort((s,o)=>o[0].localeCompare(s[0]));return e.jsx("section",{className:"page-section",children:e.jsxs("div",{className:"container",children:[e.jsx(r.h2,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5},children:"PMVikas"}),e.jsx(r.p,{className:"pmvikas-intro",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2,duration:.5},children:"Daily activity log for the internship."}),n.length===0&&e.jsxs(r.p,{className:"pmvikas-empty",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:["No entries yet. Add them in ",e.jsx("code",{children:"src/data/pmvikas.js"}),"."]}),e.jsx("div",{className:"pmvikas-calendar-months",children:i.map(([s,o])=>e.jsxs(r.div,{className:"pmvikas-month",initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.5},children:[e.jsx("h3",{className:"pmvikas-month-title",children:v(s)}),e.jsx("div",{className:"pmvikas-timeline",children:o.map((t,c)=>{const l=Number(t.date.split("-")[2]),p=k(t.date,f);return e.jsxs(r.article,{className:`pmvikas-day ${p?"pmvikas-day--today":""}`,initial:{opacity:0,x:-16},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-20px"},transition:{duration:.4,delay:c*.04},children:[e.jsxs("div",{className:"pmvikas-day-marker",children:[e.jsx("div",{className:"pmvikas-day-dot"}),e.jsx("span",{className:"pmvikas-day-date",children:l})]}),e.jsxs("div",{className:"pmvikas-day-card",children:[e.jsxs("div",{className:"pmvikas-day-header",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"pmvikas-title",children:t.title}),e.jsx("div",{className:"pmvikas-full-date",children:new Date(t.date+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"long",day:"numeric"})})]}),p&&e.jsx("span",{className:"pmvikas-badge",children:"Today"})]}),e.jsx("div",{className:"pmvikas-content",children:t.content.split(`
`).filter(Boolean).map((d,u)=>e.jsx("p",{children:d},u))}),t.tags&&t.tags.length>0&&e.jsx("div",{className:"pmvikas-tags",children:t.tags.map(d=>e.jsx("span",{className:"tag",children:d},d))})]})]},t.date+t.title)})})]},s))})]})})}export{x as default};
