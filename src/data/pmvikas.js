// PMVikas — daily course activity log
// Edit entries in this array to add your daily updates.
// Each entry: { date, title, content, tags? }

const pmvikasEntries = [
  {
    date: "2026-06-17",
    title: "Wednesday, June 17, 2026 — Introductory Class & Orientation",
    content:
      "Introduction to the PM VIKAS scheme, general orientation, and an overview of the program curriculum across all five modules.",
    tags: ["orientation", "intro"],
  },
  {
    date: "2026-06-18",
    title: "Thursday, June 18, 2026 — Week 1: Electronics - Introduction & History",
    content:
      "Began the program with the history of electronics, covering the evolution from vacuum tubes to transistors and integrated circuits (ICs).",
    tags: ["electronics", "history"],
  },
  {
    date: "2026-06-19",
    title: "Friday, June 19, 2026 — Week 1: Electronics - Active & Passive Components",
    content:
      "Detailed study of active and passive components. Explored resistors, capacitors, inductors, diodes, and transistors, including their properties and real-world applications.",
    tags: ["electronics", "components"],
  },
  {
    date: "2026-06-22",
    title: "Monday, June 22, 2026 — Week 1: Electronics - Component Analysis & Color Coding",
    content:
      "Practical session on resistor color coding (Multiplier, Tolerance like Gold ±5%, Silver). Discussed semiconductor physics, Silicon atomic structure, and PN Junction Diodes (Forward and Reverse Bias).",
    tags: ["electronics", "practical", "resistors", "diodes"],
  },
  {
    date: "2026-06-23",
    title: "Tuesday, June 23, 2026 — Week 1: Electronics - Logic Gates & Network Circuits",
    content:
      "Introduction to digital electronics. Covered basic logic gates (AND, OR, NOT) and Universal Gates (NAND, NOR). Analyzed network logic circuit complexity and cost.",
    tags: ["digital", "logic-gates", "networks"],
  },
  {
    date: "2026-06-24",
    title: "Wednesday, June 24, 2026 — Week 1: Electronics - Boolean Algebra & Theorems",
    content:
      "Deep dive into Boolean Algebra axioms (Commutative, Associative, Distributive) and De Morgan's Theorems. Simplified logic expressions using algebraic methods.",
    tags: ["boolean-algebra", "de-morgan"],
  },
  {
    date: "2026-06-25",
    title: "Thursday, June 25, 2026 — Week 1: Electronics - SOP & Logic Representation",
    content:
      "Studied Sum of Products (SOP) form, Mintererms, and Maxterms. Practiced synthesizing processes based on truth tables to draw logic diagrams.",
    tags: ["sop", "logic-representation"],
  },
  {
    date: "2026-06-26",
    title: "Friday, June 26, 2026 — Week 1: Electronics - Karnaugh Maps (K-Maps)",
    content:
      "Advanced logic simplification using Karnaugh Maps (2-variable and 4-variable). Covered Don't Care conditions in logic gates to achieve minimal cost realizations.",
    tags: ["k-maps", "logic-simplification"],
  },
  {
    date: "2026-06-29",
    title: "Monday, June 29, 2026 — Week 2: Embedded Systems - Sequential Logic",
    content:
      "Transitioned to embedded systems by designing Sequential Logic Circuits. Explored Latches, Edge-Triggered Flip-Flops (SR, JK, D), and Registers.",
    tags: ["embedded", "sequential-logic", "flip-flops"],
  },
  {
    date: "2026-06-30",
    title: "Tuesday, June 30, 2026 — Week 2: Embedded Systems - Combinational Circuits",
    content:
      "Designed and analyzed Combinational Circuits including Half Adders, Full Adders, Half Subtractors, and Full Subtractors.",
    tags: ["embedded", "adders", "combinational-circuits"],
  },
  {
    date: "2026-07-01",
    title: "Wednesday, July 1, 2026 — Week 2: Embedded Systems - Multiplexers & Encoders",
    content:
      "Continued with Combinational Logic: Multiplexers, Demultiplexers, Encoders, and Decoders. Discussed Synchronous vs. Asynchronous Sequential Circuits.",
    tags: ["embedded", "mux", "encoders", "decoders"],
  },
  {
    date: "2026-07-02",
    title: "Thursday, July 2, 2026 — Week 2: Embedded Systems - Microprocessor Architecture",
    content:
      "Introduction to Microprocessors. Covered the architecture of the 8085 microprocessor, memory interleaving, and basic 8085 instructions.",
    tags: ["microprocessor", "8085", "architecture"],
  },
  {
    date: "2026-07-03",
    title: "Friday, July 3, 2026 — Week 2: Embedded Systems - Microcontrollers (8051 vs ARM)",
    content:
      "Compared microcontroller architectures: 8051 (16-bit) vs ARM (32-bit). Discussed data transfer ports, address matching, and peripheral devices.",
    tags: ["microcontroller", "8051", "arm", "embedded"],
  },
  {
    date: "2026-07-06",
    title: "Monday, July 6, 2026 — Week 2: Embedded Systems - Instruction Sets & Programming",
    content:
      "Explored machine control, branch, logic, and arithmetic instructions for microprocessors. Discussed Opcode and Operand structures.",
    tags: ["instruction-set", "programming", "opcode"],
  },
  {
    date: "2026-07-07",
    title: "Tuesday, July 7, 2026 — Week 2: Embedded Systems - Arduino Platform",
    content:
      "Introduction to Arduino. Discussed Arduino architecture, IDE setup, and wrote basic programs to interface with external LEDs and switches.",
    tags: ["arduino", "hardware", "led"],
  },
  {
    date: "2026-07-08",
    title: "Wednesday, July 8, 2026 — Week 3: Computer Networking - Fundamentals",
    content:
      "Started Computer Networking module. Covered basic network topologies, transmission media, and the OSI Reference Model.",
    tags: ["networking", "osi-model", "topologies"],
  },
  {
    date: "2026-07-09",
    title: "Thursday, July 9, 2026 — Week 3: Computer Networking - Network Types",
    content:
      "Detailed discussion on Personal Area Networks (PAN), Local Area Networks (LAN), and Wide Area Networks (WAN). Explored networking hardware (Routers, Switches).",
    tags: ["pan", "lan", "wan", "network-hardware"],
  },
  {
    date: "2026-07-10",
    title: "Friday, July 10, 2026 — Week 3: Computer Networking - TCP/IP Protocol Suite",
    content:
      "Deep dive into the TCP/IP protocol suite. Discussed IP addressing (IPv4 vs IPv6), subnetting, and routing principles.",
    tags: ["tcp-ip", "ipv4", "ipv6", "subnetting"],
  },
  {
    date: "2026-07-13",
    title: "Monday, July 13, 2026 — Week 3: Computer Networking - Transport Layer",
    content:
      "Analyzed Transport Layer protocols: TCP and UDP. Discussed connection-oriented vs connectionless communication, ports, and sockets.",
    tags: ["tcp", "udp", "transport-layer", "sockets"],
  },
  {
    date: "2026-07-14",
    title: "Tuesday, July 14, 2026 — Week 3: Computer Networking - Application Layer",
    content:
      "Explored Application Layer protocols including HTTP, HTTPS, FTP, and DNS. Discussed client-server architectures and peer-to-peer networks.",
    tags: ["http", "https", "ftp", "dns", "application-layer"],
  },
  {
    date: "2026-07-15",
    title: "Wednesday, July 15, 2026 — Week 3: Computer Networking - Network Security",
    content:
      "Introduction to network security. Covered basic cryptography, firewalls, VPNs, and common network vulnerabilities and attacks.",
    tags: ["network-security", "cryptography", "firewalls", "vpn"],
  },
  {
    date: "2026-07-16",
    title: "Thursday, July 16, 2026 — Industry Institution Interactive Meet (BOAT)",
    content:
      "Participated in an Industry Institution Interactive Meet to discuss real-world engineering challenges, industry expectations, and collaborative opportunities.",
    tags: ["industry-meet", "interactive"],
  },
  {
    date: "2026-07-17",
    title: "Friday, July 17, 2026 — Week 4: Cloud Computing - Introduction",
    content:
      "Began Cloud Computing module. Discussed the evolution of cloud technology, virtualization concepts, and hypervisors.",
    tags: ["cloud-computing", "virtualization", "hypervisors"],
  },
  {
    date: "2026-07-20",
    title: "Monday, July 20, 2026 — Week 4: Cloud Computing - Service Models",
    content:
      "Detailed analysis of Cloud Service Models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",
    tags: ["iaas", "paas", "saas", "cloud-service-models"],
  },
  {
    date: "2026-07-21",
    title: "Tuesday, July 21, 2026 — Week 4: Cloud Computing - Deployment Models",
    content:
      "Explored Cloud Deployment Models: Public, Private, Hybrid, and Community clouds. Discussed use cases and security implications for each.",
    tags: ["public-cloud", "private-cloud", "hybrid-cloud", "community-cloud"],
  },
  {
    date: "2026-07-22",
    title: "Wednesday, July 22, 2026 — Week 4: Cloud Computing - Major Cloud Providers",
    content:
      "Overview of major cloud service providers (AWS, Microsoft Azure, Google Cloud). Discussed core compute, storage, and networking services.",
    tags: ["aws", "azure", "gcp", "cloud-providers"],
  },
  {
    date: "2026-07-23",
    title: "Thursday, July 23, 2026 — Week 4: Cloud Computing - Cloud Storage & Databases",
    content:
      "Deep dive into cloud storage solutions (Object, Block, File storage) and managed databases (Relational and NoSQL) in the cloud.",
    tags: ["cloud-storage", "nosql", "relational-db"],
  },
  {
    date: "2026-07-24",
    title: "Friday, July 24, 2026 — Week 4: Cloud Computing - Cloud Security & Architecture",
    content:
      "Discussed cloud security best practices, Identity and Access Management (IAM), and designing highly available, fault-tolerant architectures.",
    tags: ["cloud-security", "iam", "architecture"],
  },
  {
    date: "2026-07-27",
    title: "Monday, July 27, 2026 — Week 5: IoT - Basic Building Blocks",
    content:
      "Started Internet of Things (IoT) module. Explored the basic building blocks of IoT: Sensors, Networks, Processors, and Actuators.",
    tags: ["iot", "sensors", "actuators"],
  },
  {
    date: "2026-07-28",
    title: "Tuesday, July 28, 2026 — Week 5: IoT - Subsets of IoT Domain",
    content:
      "Discussed various subsets of the IoT Domain: Industrial IoT (IIoT), Consumer IoT (CIoT), Social IoT (SIoT), and Semantic IoT. Introduced Industry 4.0 concepts.",
    tags: ["iiot", "ciot", "siot", "industry-4-0"],
  },
  {
    date: "2026-07-29",
    title: "Wednesday, July 29, 2026 — Week 5: IoT - Classes and Types of Sensors",
    content:
      "Detailed study of sensor classification (Analog/Digital, Scalar/Vector). Explored various sensor types: Light, Touch, Humidity, Temperature, Force, and Ultrasonic.",
    tags: ["sensors", "temperature", "humidity", "ultrasonic"],
  },
  {
    date: "2026-07-30",
    title: "Thursday, July 30, 2026 — Week 5: IoT - Sensor Applications & Case Studies",
    content:
      "Analyzed real-world sensor applications. Discussed solving problems like automated waste classification and detecting cracks to prevent railway accidents.",
    tags: ["sensor-applications", "case-studies"],
  },
  {
    date: "2026-07-31",
    title: "Friday, July 31, 2026 — Week 5: IoT - IoT Network Protocols",
    content:
      "Explored communication protocols specific to IoT, including MQTT, CoAP, Zigbee, and Bluetooth Low Energy (BLE).",
    tags: ["mqtt", "coap", "zigbee", "ble"],
  },
  {
    date: "2026-08-03",
    title: "Monday, August 3, 2026 — Week 5: IoT - Cloud Integration & Edge Computing",
    content:
      "Discussed integrating IoT devices with cloud platforms for data analytics. Introduced Edge Computing to process data closer to the source.",
    tags: ["edge-computing", "cloud-integration"],
  },
  {
    date: "2026-08-04",
    title: "Tuesday, August 4, 2026 — Week 5: IoT - Arduino IoT Projects",
    content:
      "Hands-on session using Arduino to build a basic IoT node. Interfaced temperature and humidity sensors and transmitted data via serial communication.",
    tags: ["arduino", "temp-humidity-sensor", "iot-node"],
  },
  {
    date: "2026-08-05",
    title: "Wednesday, August 5, 2026 — Week 5: IoT - Advanced IoT Interfacing",
    content:
      "Continued project work. Added actuators (relays, motors) to the IoT system to take physical actions based on sensor data thresholds.",
    tags: ["relays", "motors", "actuator-control"],
  },
  {
    date: "2026-08-06",
    title: "Thursday, August 6, 2026 — Week 5: IoT - System Testing & Troubleshooting",
    content:
      "Final testing and troubleshooting of the assembled IoT systems. Discussed common points of failure in hardware and network connections.",
    tags: ["troubleshooting", "testing"],
  },
  {
    date: "2026-08-07",
    title: "Friday, August 7, 2026 — Project Presentation",
    content:
      "Final day of the program. Presented the completed internship projects, demonstrating the integration of embedded systems, networking, cloud, and IoT concepts.",
    tags: ["project-presentation", "presentation"],
  },
];

export default pmvikasEntries;
