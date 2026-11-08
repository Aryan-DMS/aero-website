---
title: Division Restructure
category: Active
dateString: OCT 2026
location: FOUNDATION
hardware: MicroClass
summary: AeroClub formally shifted focus from RC model building to fully
  autonomous, competition-grade UAV systems.
image: https://images.unsplash.com/photo-1724010371681-7cdbfb42a7ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D
report_mode: Automation
automation_payload: >-
  {
    "phase1": {
      "overline": "01 // THE DIRECTIVE",
      "heading": "Phase II Autonomous Flight Trials",
      "hook": "Operation Vanguard represents our most critical field deployment of the academic year, focusing strictly on beyond-visual-line-of-sight (BVLOS) autonomous navigation. The primary directive is to stress-test the newly integrated ArduPilot flight controller under live environmental conditions, specifically measuring telemetry latency and waypoint precision in high-wind corridors. This localized testing phase is mandatory before the fleet can be cleared for the National SAE Aero Design payload rounds."
    },
    "phase2": {
      "overline": "02 // OPERATIONAL TIMELINE",
      "heading": "Deployment Schedule & Pacing",
      "context": "This is a grueling, rapid-fire 10-hour deployment window. Due to local airspace regulations and thermal updraft schedules, all primary flight operations must be concluded prior to 1400 hours. The pacing is dictated by strict battery charging cycles and mandatory 15-minute avionics cooling periods between sorties. Personnel are assigned in rolling shifts to ensure continuous monitoring of the ground station without operator fatigue.",
      "timeline": [
        {
          "time": "0600 HRS",
          "desc": "Advance team deployment. Assembly of the primary Ground Control Station (GCS) and calibration of the localized GPS RTK base station."
        },
        {
          "time": "0830 HRS",
          "desc": "First motor spool and tethered hover tests. Diagnostic check of 2.4GHz control link and 5.8GHz video transmission systems."
        },
        {
          "time": "1000 HRS",
          "desc": "Initiation of untethered waypoint navigation. Execution of grid-search patterns at 400ft AGL (Above Ground Level)."
        },
        {
          "time": "1430 HRS",
          "desc": "Flight line closure. Disassembly of the aircraft, secured data extraction from the onboard black box, and site evacuation."
        }
      ]
    },
    "phase3": {
      "overline": "03 // DEPLOYMENT MANIFEST",
      "heading": "Assets & Hardware Allocation",
      "context": "Executing a high-risk autonomous trial requires a massive logistical footprint. We are deploying three separate divisions: the Flight Line Crew for hardware handling, the Telemetry Command for software monitoring, and a designated Safety Officer for airspace observation. The hardware manifest includes our primary composite airframe, backup propulsion modules, and a heavy-duty localized network server to process live flight logs without relying on campus Wi-Fi.",
      "matrix": [
        {
          "asset": "Project Valkyrie v2.4",
          "role": "Primary test vehicle. Equipped with dual-GPS redundancy and experimental carbon-fiber landing gear."
        },
        {
          "asset": "GCS Node Alpha",
          "role": "Main telemetry processing unit. Responsible for sending waypoint overrides and monitoring voltage sag in real-time."
        },
        {
          "asset": "Anemometer Array",
          "role": "Perimeter wind-speed sensors deployed at 50m intervals to correlate crosswind gusts with aircraft roll deviations."
        },
        {
          "asset": "Emergency Net",
          "role": "Manual 900MHz radio override system, held by the Safety Captain to instantly terminate autonomous flight if geofences are breached."
        }
      ]
    },
    "phase4": {
      "overline": "04 // TARGET METRICS",
      "heading": "Diagnostic Scale & Outcomes",
      "context": "Success for this operation is not measured in speed or lifting capacity, but in data density and system stability. We are establishing strict baseline metrics to validate the software architecture. The objective is to complete 100% of the programmed flight paths with a cross-track error of less than 2 meters, while maintaining a continuous, uncorrupted data stream back to the Ground Control Station.",
      "dashboard": [
        {
          "val": "24+",
          "label": "AUTONOMOUS SORTIES"
        },
        {
          "val": "< 2m",
          "label": "WAYPOINT ACCURACY"
        },
        {
          "val": "15ms",
          "label": "TELEMETRY LATENCY"
        },
        {
          "val": "100%",
          "label": "GEOFENCE COMPLIANCE"
        }
      ]
    },
    "phase5": {
      "overline": "05 // THE HORIZON",
      "heading": "R&D Impact & Institutional Growth",
      "debrief": "The raw logs extracted from Operation Vanguard will serve as the foundational dataset for our software team throughout the winter semester. By identifying exactly where the autonomous navigation struggles against wind shear, we can write custom compensation algorithms. Furthermore, this highly visible, disciplined field test serves as a masterclass for our junior members, directly exposing them to professional-grade aerospace logistics and safety protocols."
    }
  }
---
Historical record of the club's structural reorganization.
