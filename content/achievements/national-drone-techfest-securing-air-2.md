---
title: "National Drone Techfest: Securing AIR 2"
card_title: National Drone Techfest
hero_meta: MISSION LOG // DEC 2026 // PUNE, INDIA
card_meta: "DEC 2026 // OVERALL RANK: AIR 5"
image: https://images.unsplash.com/photo-1724010371681-7cdbfb42a7ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D
summary: Copy that entire block exactly as it is and paste it directly into your
  new "Automation Payload" field in Decap CMS. Make sure the dropdown is set to
  "Automation", hit publish, and check the live page. It will instantly draw
  every paragraph, bar track, matrix border, and dashboard metric perfectly
  scaled to the data.
hardware: Project Valkyrie (Quadcopter)
result: All India Rank 5
report_mode: Automation
automation_payload:
  code: >-
    {
      "phase1": {
        "hook": "Deploying Project Valkyrie v2 at the National Drone Techfest 2026, our primary objective was to validate our new high-lift aerodynamic architecture under strict payload fraction constraints. Navigating severe crosswinds and aggressive flight windows, the team secured an Overall All India Rank 5, proving the viability of our autonomous delivery subsystems."
      },
      "phase2": {
        "strategy": "Our competitive strategy bypassed pure speed in favor of absolute payload optimization. By utilizing a lightweight carbon-balsa composite frame, we aimed to maximize the scoring multiplier heavily weighted toward the empty-to-payload weight ratio.",
        "execution": "This approach dominated the technical rounds. While flight round scoring was marginally impacted by conservative banking angles during high-wind gusts, the design and presentation telemetry kept us firmly within the top 5 percentile nationally.",
        "bars": [
          {
            "label": "Design Report & CAD",
            "val": 46.5,
            "max": 50
          },
          {
            "label": "Technical Presentation",
            "val": 42.0,
            "max": 50
          },
          {
            "label": "Flight Round Multiplier",
            "val": 94.5,
            "max": 100
          }
        ]
      },
      "phase3": {
        "context": "The operational environment presented immediate hurdles. Unseasonal 40°C tarmac temperatures threatened to throttle the propulsion units, while 25km/h crosswinds required aggressive PID tuning adjustments on the flight line just minutes before takeoff.",
        "matrix": [
          {
            "sub": "Avionics & Telemetry",
            "cap": "Maintained 2.4GHz link integrity and solid GPS lock despite heavy RF interference at the 1.2km boundary."
          },
          {
            "sub": "Propulsion Unit",
            "cap": "Delivered 4.8kg of static thrust, operating flawlessly at peak temperatures without thermal throttling."
          },
          {
            "sub": "Payload Mechanism",
            "cap": "Executed a sub-2-second automated drop sequence, hitting the drop zone with 98% target accuracy."
          }
        ]
      },
      "phase4": {
        "dynamics": "Once airborne, Valkyrie v2 demonstrated exceptional roll stability. The custom airfoil generated expected lift at lower-than-predicted airspeeds, allowing the flight controller to maintain altitude without draining the 6S battery packs prematurely.",
        "dashboard": [
          {
            "val": "1.8x",
            "label": "PAYLOAD FRACTION"
          },
          {
            "val": "4.8kg",
            "label": "MAX TAKEOFF WEIGHT"
          },
          {
            "val": "24m/s",
            "label": "CRUISE SPEED"
          },
          {
            "val": "14min",
            "label": "FLIGHT ENDURANCE"
          }
        ]
      },
      "phase5": {
        "debrief": "The flight data captured during this deployment is already driving the architecture of Mk III. While the payload fraction exceeded expectations, post-flight structural analysis revealed micro-stress points in the landing gear mounts, dictating a shift toward CNC-machined aluminum brackets for next season's airframe."
      }
    }
---
