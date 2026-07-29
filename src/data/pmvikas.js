// PMVikas — daily course activity log
// Edit entries in this array to add your daily updates.
// Each entry: { date, title, content, tags? }

const pmvikasEntries = [
  {
    date: "2026-07-14",
    title: "Portfolio Refinement & Setup",
    content: `Set up the PMVikas tracking page on my portfolio. This is where I'll log daily activities, learnings, and progress throughout the PMVikas course.

Key focus areas for the course: systems thinking, project management, and hands-on development workflows.`,
    tags: ["setup", "portfolio"],
  },
  {
    date: "2026-06-19",
    title: "Day 01 — Introduction to IoT & Ecosystem",
    content:
      "Inauguration of the PM-VIKAS IoT Assistant Training Program.\nIntroduction to IoT ecosystem, nodes, and device-to-cloud architecture.\nOverview of smart cities, smart grids, and real-world IoT applications.\nStudied communication layers used in IoT systems.",
    tags: ["IoT", "overview"],
  },
  {
    date: "2026-06-20",
    title: "Day 02 — Microcontroller Architectures & Arduino IDE",
    content:
      "Studied Arduino Uno and ESP32 architectures.\nInstalled and configured Arduino IDE.\nLearned board and port configuration.\nWrote basic C/C++ programs and uploaded LED Blink to the board.",
    tags: ["Arduino", "ESP32", "C/C++"],
  },
  {
    date: "2026-06-22",
    title: "Day 03 — Basic Electronic Components",
    content:
      "Learned about resistors, capacitors, and LEDs.\nUnderstood component specifications and practical applications.\nPerformed breadboard wiring exercises.\nBuilt simple circuits following standard design practices.",
    tags: ["electronics", "breadboard"],
  },
  {
    date: "2026-06-23",
    title: "Day 04 — Hardware Measurement & GPIO",
    content:
      "Explored digital and analog GPIO pins.\nConfigured GPIOs for input and output operations.\nMeasured voltage, current, and resistance using a digital multimeter.\nVerified electrical parameters in practical circuits.",
    tags: ["GPIO", "hardware"],
  },
  {
    date: "2026-06-24",
    title: "Day 05 — Interfacing LDR (Light Sensor)",
    content:
      "Interfaced an LDR with Arduino.\nRead ambient light intensity using analog inputs.\nProgrammed threshold-based lighting control.\nTriggered outputs based on changing light conditions.",
    tags: ["sensors", "LDR", "Arduino"],
  },
  {
    date: "2026-06-25",
    title: "Day 06 — Interfacing DHT11 Temperature & Humidity Sensor",
    content:
      "Connected and programmed the DHT11 sensor.\nMeasured temperature and humidity.\nImplemented basic data validation to reduce noise.\nFormatted sensor readings for transmission.",
    tags: ["sensors", "DHT11"],
  },
  {
    date: "2026-06-26",
    title: "Day 07 — ESP32 Wi-Fi & Network Protocols",
    content:
      "Configured ESP32 Wi-Fi module.\nConnected ESP32 to a wireless network in Station (STA) mode.\nLearned IP addressing concepts.\nStudied TCP client-server communication for IoT applications.",
    tags: ["ESP32", "Wi-Fi", "networking"],
  },
  {
    date: "2026-06-27",
    title: "Day 08 — Blynk IoT Cloud Setup",
    content:
      "Created a Blynk IoT Cloud account and configured device templates.\nCreated virtual datastreams and generated auth tokens.\nBuilt a basic mobile dashboard for remote monitoring.",
    tags: ["Blynk", "cloud", "dashboard"],
  },
  {
    date: "2026-06-29",
    title: "Day 09 — Real-Time Cloud Telemetry with Blynk",
    content:
      "Connected ESP32 to Blynk Cloud.\nUploaded LDR and DHT11 data in real time.\nVerified remote monitoring through mobile widgets.\nObserved low-latency cloud communication.",
    tags: ["Blynk", "telemetry", "ESP32"],
  },
  {
    date: "2026-06-30",
    title: "Day 10 — ThingSpeak Data Logging & Capstone Project",
    content:
      "Integrated ESP32 with ThingSpeak cloud.\nLogged sensor readings for long-term storage.\nVisualized data using ThingSpeak graphs.\nDeveloped a Smart Home System integrating sensors and relay control as the internship capstone project.",
    tags: ["ThingSpeak", "capstone", "smart-home"],
  },
];

export default pmvikasEntries;
