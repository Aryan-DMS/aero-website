---
card:
  report_mode: Automation
  title: SAEISS DDC
  meta: 2026/Chennai
  summary: Deploying Project Valkyrie v2 at the National SAE Aero Design Challenge
    2026, our primary objective was to validate our new high-lift aerodynamic
    architecture under strict payload fraction constraints
  image: https://images.unsplash.com/photo-1724010371681-7cdbfb42a7ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D
automation:
  payload: >-
    {
      "cinematic_title": "Project Valkyrie: Securing AIR 5 at SAE Aero Design",
      "hero_meta": "MISSION LOG // JULY 2026 // CHENNAI, INDIA",
      "primary_metric": {
        "label": "OVERALL RANK",
        "value": "AIR 5 (out of 102)"
      },
      "secondary_metrics": [
        {
          "label": "HARDWARE DEPLOYED",
          "value": "Valkyrie Mk-III (Fixed Wing)"
        },
        {
          "label": "MAXIMUM PAYLOAD",
          "value": "4.2 kg"
        },
        {
          "label": "FLIGHT SCORE",
          "value": "92.5 / 100"
        }
      ],
      "phase1": {
        "overline": "01 // EXECUTIVE BRIEFING",
        "heading": "Mission Overview & Objectives",
        "hook": "Tasked with maximizing payload fraction under extreme dimensional constraints, the team deployed the Valkyrie Mk-III to SAE Aero Design Southern Section. The primary directive: achieve a stable flight envelope while carrying 250% of the aircraft's empty weight."
      },
      "phase2": {
        "overline": "02 // STRATEGY & SCORING",
        "heading": "Competitive Execution",
        "strategy": "Our structural approach sacrificed a minor margin of aerodynamic efficiency in favor of a high-lift, high-camber wing profile. This allowed us to score heavily in the payload drops while maintaining strict compliance with the 1000-watt power limiter.",
        "execution": "Despite 18-knot crosswinds during the second flight round, the flight controller's active stabilization kept the roll deviations under 5 degrees, securing near-perfect execution points.",
        "bars": [
          {
            "label": "Technical Presentation",
            "val": 45,
            "max": 50
          },
          {
            "label": "Design Report",
            "val": 92,
            "max": 100
          },
          {
            "label": "Flight Demonstration",
            "val": 138,
            "max": 150
          }
        ]
      },
      "phase3": {
        "overline": "03 // FIELD VARIABLES",
        "heading": "Environmental Context & Hardware",
        "context": "Operating at sea level in 38°C ambient heat required aggressive thermal management for the ESC and motor. We integrated a custom 3D-printed NACA duct to channel high-velocity air directly over the power distribution board.",
        "matrix": [
          {
            "sub": "Propulsion",
            "cap": "Leopard 4250 800KV Outrunner matched with 13x8 APC Propeller"
          },
          {
            "sub": "Airfoil",
            "cap": "Selig 1223 (High Lift, low speed optimization)"
          },
          {
            "sub": "Avionics",
            "cap": "Pixhawk 4 Mini running custom ArduPilot PID loop"
          },
          {
            "sub": "Structural",
            "cap": "Carbon fiber spars with balsa ribbing and Monokote skin"
          }
        ]
      },
      "phase4": {
        "overline": "04 // AERODYNAMICS",
        "heading": "Flight Envelope & Peak Capabilities",
        "dynamics": "Telemetry data confirmed that the Valkyrie Mk-III successfully delayed flow separation at high angles of attack. The vortex generators applied to the outboard wing sections improved aileron authority by 14% at near-stall speeds.",
        "dashboard": [
          {
            "val": "6.1kg",
            "label": "Max Takeoff Weight"
          },
          {
            "val": "12m/s",
            "label": "Stall Speed (Full Flaps)"
          },
          {
            "val": "1.8",
            "label": "Thrust-to-Weight Ratio"
          },
          {
            "val": "10Hz",
            "label": "Telemetry Refresh Rate"
          }
        ]
      },
      "phase5": {
        "overline": "05 // CONCLUSION",
        "heading": "Post-Action Directives",
        "debrief": "Securing AIR 5 validates our high-lift aerodynamic philosophy, but telemetry revealed a 6% efficiency loss due to fuselage drag. The next iteration will transition to a streamlined monocoque carbon-fiber body to aggressively reduce parasitic drag and push for the podium."
      }
    }
---
