---
title: Climber c3
card_meta: CLASS // AUTONOMOUS QUADCOPTER
hero_meta: "CLASS: AUTONOMOUS QUADCOPTER // STATUS: ACTIVE"
image: https://images.unsplash.com/photo-1755524709943-b33ad219f80c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D
card_specs:
  - label: Chasis
    value: Metal
  - label: Max Takeoff
    value: 4.2 KG
  - label: Climb
    value: 800m
  - label: payload
    value: 600g
dimensions:
  - label: Diagonal Wheelbase
    value: 550 mm
  - label: Dry Weight
    value: 2.1 kg
  - label: Max Takeoff Weight (MTOW)
    value: 5KG
  - label: Overall Dimensions
    value: 680 × 680 × 280 mm
report_mode: Automation
automation_payload: >-
  {
    "phase1": {
      "overline": "01 // THE ARCHITECTURE",
      "heading": "Platform Directive",
      "hook": "Project Valkyrie Mk II was commissioned to solve a specific aerospace paradox: the need for aggressive vertical lift agility combined with high-endurance forward flight efficiency. Serving as our flagship autonomous VTOL (Vertical Take-Off and Landing) hybrid, this platform was engineered from the ground up to dominate the heavy-lift payload classes at national SAE Aero competitions while operating strictly beyond visual line of sight (BVLOS)."
    },
    "phase2": {
      "overline": "02 // AIRFRAME",
      "heading": "Structural Engineering & Materials",
      "chassis": "The structural philosophy of Valkyrie Mk II revolves around a rigid carbon-fiber monocoque core. We abandoned traditional balsa wood ribs in favor of custom-cut 3K woven carbon plates, significantly reducing flex during high-G banking maneuvers. The wings feature a custom, high-camber airfoil designed via extensive Computational Fluid Dynamics (CFD) to maximize lift at lower cruising speeds.",
      "assembly": "Fabrication required a hybrid manufacturing approach. While the main spars are pultruded carbon fiber, the complex motor mounts and avionics bay were printed in-house using continuous-fiber reinforced nylon. This allowed us to rapidly iterate the motor tilt mechanisms overnight without waiting for external CNC machine shop delays.",
      "dimensions": [
        {
          "spec": "Wingspan",
          "val": "1.85 Meters"
        },
        {
          "spec": "Dry Airframe Weight",
          "val": "2.4 Kilograms"
        },
        {
          "spec": "Max Takeoff Weight (MTOW)",
          "val": "6.8 Kilograms"
        },
        {
          "spec": "Primary Material",
          "val": "3K Carbon Fiber / CF-Nylon"
        }
      ]
    },
    "phase3": {
      "overline": "03 // PROPULSION",
      "heading": "Avionics & Power Delivery",
      "nervous_system": "The biological heart of the aircraft is an ArduPilot-flashed Pixhawk Cube Orange, providing triple-redundant IMU sensors to prevent catastrophic attitude failure in flight. Power is distributed through a custom-soldered, high-amperage PDB (Power Distribution Board), feeding four 40-amp electronic speed controllers. To eliminate voltage sag during aggressive vertical ascents, the entire system runs on a massive 6S Lithium-Polymer architecture.",
      "dashboard": [
        {
          "val": "8.2kg",
          "label": "PEAK STATIC THRUST"
        },
        {
          "val": "22V",
          "label": "NOMINAL VOLTAGE"
        },
        {
          "val": "6S 10A",
          "label": "BATTERY CAPACITY"
        },
        {
          "val": "45A",
          "label": "PEAK CURRENT DRAW"
        }
      ]
    },
    "phase4": {
      "overline": "04 // ENVELOPE",
      "heading": "Flight Dynamics & Capabilities",
      "dynamics": "Valkyrie Mk II's flight envelope is defined by its transition sequence. The quad-rotor system handles absolute vertical stability up to 15 meters, before the flight controller commands a 15-degree pitch-down attitude, spooling the forward propulsion motor. Once airspeed exceeds stall velocity (approx. 12m/s), the lift-rotors completely shut down, allowing the wings to take the entire load. This transition eliminates hover-state battery drain and triples the operational range.",
      "capabilities": [
        {
          "label": "Forward Flight Endurance",
          "val": 94,
          "max": 100
        },
        {
          "label": "Payload Efficiency Ratio",
          "val": 88,
          "max": 100
        },
        {
          "label": "Hover State Agility",
          "val": 72,
          "max": 100
        },
        {
          "label": "Crosswind Penetration",
          "val": 85,
          "max": 100
        }
      ]
    },
    "phase5": {
      "overline": "05 // LEGACY",
      "heading": "Operational Horizon",
      "debrief": "Valkyrie Mk II currently serves as the primary active workhorse for the AeroClub's heavy-lift division. However, the telemetry gathered from its high-amperage transition phases has highlighted minor thermal inefficiencies in the rear ESC placements. This airframe will remain active through the 2027 competitive season, while its data simultaneously acts as the foundational blueprint for the upcoming, fully composite Mk III."
    }
  }
blocks:
  - type: text_block
    heading: Aircraft Overview
    content: >-
      The SKYHAWK X1 is a compact, electrically powered unmanned aerial vehicle
      (UAV) designed for aerial reconnaissance, experimental flight operations,
      and academic research. Developed with an emphasis on structural
      efficiency, flight stability, and modular integration, the aircraft serves
      as a versatile platform for exploring modern unmanned aviation
      technologies.


      Featuring a four-rotor configuration and a lightweight structural framework, the SKYHAWK X1 is designed to deliver stable flight characteristics while accommodating a range of onboard electronic systems and mission-specific payloads.


      Its modular architecture allows for subsystem upgrades, experimental modifications, and integration of additional flight instrumentation, making it suitable for both technical demonstrations and research-oriented applications.
  - type: text_block
    heading: Design & Engineering
    content: >-
      Airframe Structure


      The aircraft employs a lightweight carbon-fibre and aluminium-supported frame designed to maintain structural rigidity while minimizing overall mass. Its symmetrical configuration helps distribute propulsion loads and maintain flight stability.


      Propulsion System


      The four-motor propulsion arrangement provides independent thrust control across all rotor assemblies. Brushless electric motors are paired with electronic speed controllers (ESCs) to enable precise motor response and controlled manoeuvrability.


      Flight Control & Navigation


      An integrated flight controller manages stabilization, attitude control, and flight-mode execution. GNSS-based positioning supports navigation and position-hold functionality, subject to the installed avionics configuration.


      Power Management


      The aircraft uses a rechargeable lithium-polymer battery system to supply power to its propulsion and onboard electronics. Power distribution and monitoring systems support controlled energy utilization during flight operations.
  - type: text_block
    heading: Development Status
    content: >-
      The SKYHAWK X1 is classified as a prototype development platform. Its
      modular construction allows continued experimentation with flight-control
      parameters, propulsion efficiency, structural configurations, and onboard
      payload systems.


      Future development objectives include improving flight endurance, enhancing navigation reliability, and expanding payload integration capabilities.




      The SKYHAWK X1 represents an exploration of compact UAV engineering, bringing together structural design, electronic integration, propulsion technology, and flight-control systems in a unified aerial platform.


      Designed as a foundation for experimentation and continuous improvement, it reflects the Aero Club's commitment to practical aerospace learning, engineering innovation, and the development of next-generation aerial systems.
---
