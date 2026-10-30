---
title: Project Valkyrie v2.0
card_meta: CLASS // AUTONOMOUS QUADCOPTER
hero_meta: "CLASS: AUTONOMOUS QUADCOPTER // STATUS: ACTIVE"
image: https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800&bg=transparent
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
blocks:
  - type: text_block
    heading: Engineering Summary
    content: Project Valkyrie v2.0 is the current flagship of AeroClub's autonomous
      multi-rotor division. Engineered entirely in-house to meet the stringent
      requirements of tier-1 national competitions, the v2.0 iteration
      introduces a radically redesigned chassis and an upgraded embedded systems
      stack capable of GPS-denied navigation.
  - type: text_block
    heading: Structural Dynamics
    content: >-
      To achieve a 14% reduction in dry weight over the v1.0 prototype, our
      manufacturing team abandoned off-the-shelf aluminum arms. Instead, the
      central hub and motor mounts are CNC machined from 6061-T6 aluminum, while
      the arms utilize a proprietary 3K carbon-fiber tube layup, cured in our
      Lab 3 facility.


      This hybrid material approach maximized torsional rigidity, severely reducing structural resonance that previously interfered with the onboard inertial measurement unit (IMU) during aggressive flight maneuvers.
  - type: text_block
    heading: Autonomous Payload Delivery
    content: >-
      The primary mission objective for the Valkyrie platform is precision
      payload deployment. Integrating an underside 3D-printed electro-mechanical
      release mechanism, the aircraft relies on a downward-facing LiDAR array
      and optical flow camera to calculate altitude and ground speed with
      centimeter-level accuracy.


      Upon recognizing an ARUco marker array on the ground via the onboard Raspberry Pi companion computer, the Pixhawk flight controller autonomously arrests horizontal velocity, descends to a 2-meter threshold, and actuates the payload release before initiating an automatic return-to-launch (RTL) sequence.
---
