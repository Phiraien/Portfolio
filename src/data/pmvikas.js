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
];

export default pmvikasEntries;
