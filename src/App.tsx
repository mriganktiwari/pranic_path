import React, { useState, useEffect } from "react";
import { 
  masterclassChapters, 
  healingDirectory
} from "./data/masterclass";

interface SomaticSessionStep {
  text: string;
  duration: number;
  audioCue: string;
  svgName: string;
  chapterTitle?: string;
}

interface SomaticVisualsProps {
  svgName: string;
  stepIndex: number;
  stepText: string;
}

const SomaticVisuals: React.FC<SomaticVisualsProps> = ({ svgName, stepText }) => {
  const textLower = stepText.toLowerCase();

  // 1. Setup
  if (svgName === "setup") {
    return (
      <svg className="somatic-guide-svg animate-sway" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="25" fill="none" stroke="hsla(256, 75%, 70%, 0.15)" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="45" fill="none" stroke="hsla(256, 75%, 70%, 0.08)" strokeWidth="1" />
        <path
          d="M 100 75 C 105 88, 115 95, 100 120 C 85 95, 95 88, 100 75 Z"
          fill="url(#goldGrad)"
          className="svg-glow-gold"
          opacity="0.8"
        />
        <path
          d="M 100 85 C 115 95, 125 105, 100 120 C 75 105, 85 95, 100 85 Z"
          fill="url(#violetGrad)"
          className="svg-glow-violet"
          opacity="0.6"
        />
        <circle className="svg-glow-gold" cx="100" cy="100" r="5" fill="#ffd700" />
      </svg>
    );
  }

  // 2. Hand Gateways
  if (svgName === "hand_gateways") {
    // Press right thumb into left palm
    if (textLower.includes("right thumb") || textLower.includes("press your right thumb")) {
      return (
        <svg className="somatic-guide-svg" viewBox="0 0 200 200">
          <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 70 160 C 55 160, 45 145, 45 130 C 45 120, 48 100, 48 90 C 48 86, 52 86, 52 90 C 52 100, 58 105, 58 90 C 58 85, 62 85, 62 90 C 62 100, 66 100, 66 86 C 66 82, 70 82, 70 86 C 70 100, 74 100, 74 88 C 74 84, 78 84, 78 88 C 78 100, 80 110, 82 115 C 85 120, 90 123, 90 128 C 90 142, 85 160, 70 160 Z" />
          <circle cx="65" cy="125" r="8" className="svg-glow-gold" fill="#ffd700" opacity="0.9" />
          <g className="animate-dip-hand">
            <path stroke="hsla(174, 75%, 60%, 0.85)" strokeWidth="2.5" fill="none" d="M 140 110 L 80 123" />
            <circle cx="80" cy="123" r="4" fill="var(--accent-peace)" />
          </g>
        </svg>
      );
    }
    // Press left thumb into right palm
    if (textLower.includes("left thumb") || textLower.includes("press your left thumb")) {
      return (
        <svg className="somatic-guide-svg" viewBox="0 0 200 200">
          <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 130 160 C 145 160, 155 145, 155 130 C 155 120, 152 100, 152 90 C 152 86, 148 86, 148 90 C 148 100, 142 105, 142 90 C 142 85, 138 85, 138 90 C 138 100, 134 100, 134 86 C 134 82, 130 82, 130 86 C 130 100, 126 100, 126 88 C 126 84, 122 84, 122 88 C 122 100, 120 110, 118 115 C 115 120, 110 123, 110 128 C 110 142, 115 160, 130 160 Z" />
          <circle cx="135" cy="125" r="8" className="svg-glow-gold" fill="#ffd700" opacity="0.9" />
          <g className="animate-dip-hand">
            <path stroke="hsla(174, 75%, 60%, 0.85)" strokeWidth="2.5" fill="none" d="M 60 110 L 120 123" />
            <circle cx="120" cy="123" r="4" fill="var(--accent-peace)" />
          </g>
        </svg>
      );
    }
    // Rub palms vigorously
    if (textLower.includes("rub your palms") || textLower.includes("rub palms") || textLower.includes("friction") || textLower.includes("vigorously")) {
      return (
        <svg className="somatic-guide-svg" viewBox="0 0 200 200">
          <g className="animate-rub-left">
            <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 80 140 C 65 140, 55 125, 55 110 C 55 100, 58 80, 58 70 C 58 66, 62 66, 62 70 M 62 70 C 62 80, 68 85, 68 70 M 68 70 C 68 65, 72 65, 72 70 M 72 70 C 72 80, 76 80, 76 66 M 76 66 C 76 62, 80 62, 80 66" />
          </g>
          <g className="animate-rub-right">
            <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 120 150 C 135 150, 145 135, 145 120 C 145 110, 142 90, 142 80 C 142 76, 138 76, 138 80 M 138 80 C 138 90, 132 95, 132 80 M 132 80 C 132 75, 128 75, 128 80 M 128 80 C 128 90, 124 90, 124 76 M 124 76 C 124 72, 120 72, 120 76" />
          </g>
          <circle cx="100" cy="110" r="15" fill="none" stroke="hsla(38, 85%, 65%, 0.4)" strokeWidth="3" className="svg-glow-gold animate-pulse-sphere" />
          <circle cx="100" cy="110" r="25" fill="none" stroke="hsla(256, 75%, 70%, 0.2)" strokeWidth="1.5" className="animate-pulse-sphere" />
        </svg>
      );
    }
    // Rest and observe
    if (textLower.includes("observe") || textLower.includes("rest") || textLower.includes("lap") || textLower.includes("still")) {
      return (
        <svg className="somatic-guide-svg animate-sway" viewBox="0 0 200 200">
          <g className="svg-glow-violet">
            <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 60 150 C 45 150, 35 135, 35 120 C 35 110, 38 90, 38 80 M 140 150 C 155 150, 165 135, 165 120 C 165 110, 162 90, 162 80" />
            <circle cx="55" cy="120" r="10" fill="url(#violetGrad)" className="svg-glow-violet animate-pulse-sphere" />
            <circle cx="145" cy="120" r="10" fill="url(#violetGrad)" className="svg-glow-violet animate-pulse-sphere" />
          </g>
        </svg>
      );
    }
    // Default/Relaxed hands breathing
    return (
      <svg className="somatic-guide-svg animate-sway" viewBox="0 0 200 200">
        <g opacity="0.6">
          <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 60 160 C 45 160, 35 145, 35 130 C 35 120, 38 100, 38 90 C 38 86, 42 86, 42 90 C 42 100, 48 105, 48 90 C 48 85, 52 85, 52 90 C 52 100, 56 100, 56 86 C 56 82, 60 82, 60 86 C 60 100, 64 100, 64 88 C 64 84, 68 84, 68 88 C 68 100, 70 110, 72 115 C 75 120, 80 123, 80 128 C 80 142, 75 160, 60 160 Z" />
          <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 140 160 C 155 160, 165 145, 165 130 C 165 120, 162 100, 162 90 C 162 86, 158 86, 158 90 C 158 100, 152 105, 152 90 C 152 85, 148 85, 148 90 C 148 100, 144 100, 144 86 C 144 82, 140 82, 140 86 C 140 100, 136 100, 136 88 C 136 84, 132 84, 132 88 C 132 100, 130 110, 128 115 C 125 120, 120 123, 120 128 C 120 142, 125 160, 140 160 Z" />
        </g>
      </svg>
    );
  }

  // 3. Energy Sphere
  if (svgName === "energy_sphere") {
    if (textLower.includes("rub palms") || textLower.includes("activate")) {
      return (
        <svg className="somatic-guide-svg" viewBox="0 0 200 200">
          <g className="animate-rub-left">
            <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 80 140 C 65 140, 55 125, 55 110 C 55 100, 58 80, 58 70 C 58 66, 62 66, 62 70 M 62 70 C 62 80, 68 85, 68 70 M 68 70 C 68 65, 72 65, 72 70 M 72 70 C 72 80, 76 80, 76 66 M 76 66 C 76 62, 80 62, 80 66" />
          </g>
          <g className="animate-rub-right">
            <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 120 150 C 135 150, 145 135, 145 120 C 145 110, 142 90, 142 80 C 142 76, 138 76, 138 80 M 138 80 C 138 90, 132 95, 132 80 M 132 80 C 132 75, 128 75, 128 80 M 128 80 C 128 90, 124 90, 124 76 M 124 76 C 124 72, 120 72, 120 76" />
          </g>
          <circle cx="100" cy="110" r="18" fill="none" stroke="hsla(38, 85%, 65%, 0.4)" strokeWidth="2.5" className="svg-glow-gold animate-pulse-sphere" />
        </svg>
      );
    }
    return (
      <svg className="somatic-guide-svg" viewBox="0 0 200 200">
        <g className="animate-pulse-hand-l">
          <path stroke="currentColor" strokeWidth="2" fill="none" d="M 40 70 C 45 70, 50 75, 50 85 C 50 95, 45 120, 35 130 C 25 120, 30 95, 30 85" />
        </g>
        <g className="animate-pulse-hand-r">
          <path stroke="currentColor" strokeWidth="2" fill="none" d="M 160 70 C 155 70, 150 75, 150 85 C 150 95, 155 120, 165 130 C 175 120, 170 95, 170 85" />
        </g>
        <circle cx="100" cy="100" r="30" fill="url(#violetGrad)" className="svg-glow-violet animate-pulse-sphere" />
        <circle cx="100" cy="100" r="28" fill="none" stroke="hsla(174, 75%, 60%, 0.4)" strokeWidth="2" className="svg-glow-teal animate-pulse-sphere" />
      </svg>
    );
  }

  // 4. Auric Boundary
  if (svgName === "auric_boundary") {
    if (textLower.includes("prepare") || textLower.includes("activate")) {
      return (
        <svg className="somatic-guide-svg animate-sway" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="20" fill="none" stroke="hsla(256, 75%, 70%, 0.3)" strokeWidth="2" className="animate-pulse-sphere" />
          <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 70 140 L 130 140" />
        </svg>
      );
    }
    return (
      <svg className="somatic-guide-svg" viewBox="0 0 200 200">
        <path stroke="currentColor" strokeWidth="2" fill="none" d="M 20 100 L 90 100 M 90 85 L 90 115 M 90 85 C 90 85, 110 85, 120 100 C 110 115, 90 115, 90 115" />
        <path stroke="hsla(174, 75%, 60%, 0.35)" strokeWidth="8" fill="none" d="M 50 75 C 75 75, 135 75, 140 100 C 135 125, 75 125, 50 125" className="svg-glow-teal animate-pulse-sphere" />
        <g className="animate-scan-hand">
          <path stroke="currentColor" strokeWidth="2.5" fill="none" d="M 155 85 C 150 85, 145 90, 145 100 C 145 110, 150 115, 155 115" />
          <circle cx="145" cy="100" r="5" fill="#ffd700" className="svg-glow-gold animate-pulse-sphere" />
        </g>
      </svg>
    );
  }

  // 5. Congestion
  if (svgName === "congestion") {
    if (textLower.includes("prepare") || textLower.includes("sensitize") || textLower.includes("activate")) {
      return (
        <svg className="somatic-guide-svg animate-sway" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="18" fill="none" stroke="hsla(38, 85%, 65%, 0.4)" strokeWidth="2.5" className="svg-glow-gold animate-pulse-sphere" />
        </svg>
      );
    }
    if (textLower.includes("flick") || textLower.includes("withdraw")) {
      return (
        <svg className="somatic-guide-svg" viewBox="0 0 200 200">
          <ellipse cx="140" cy="140" rx="25" ry="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 115 140 C 115 160, 165 160, 165 140" stroke="currentColor" strokeWidth="2" fill="none" />
          <g className="animate-flick-hand">
            <path stroke="currentColor" strokeWidth="2" fill="none" d="M 60 40 L 70 70 M 55 45 L 65 75 M 65 42 L 75 72" />
          </g>
          <g className="animate-flick-sparks" opacity="0.9">
            <circle cx="105" cy="90" r="3" fill="#8a2be2" />
            <circle cx="115" cy="105" r="2.5" fill="#40e0d0" />
            <circle cx="125" cy="120" r="2" fill="#ffd700" />
          </g>
        </svg>
      );
    }
    return (
      <svg className="somatic-guide-svg" viewBox="0 0 200 200">
        <path stroke="currentColor" strokeWidth="2" fill="none" d="M 40 140 C 40 100, 60 70, 90 70 C 110 70, 120 85, 130 90 L 170 90" />
        <path stroke="hsla(38, 85%, 65%, 0.65)" strokeWidth="3" fill="none" d="M 50 50 C 70 30, 110 30, 130 65" className="svg-glow-gold animate-pulse-sphere" />
        <g className="animate-scan-hand">
          <path stroke="currentColor" strokeWidth="2.5" fill="none" d="M 90 35 C 85 38, 85 45, 90 50" />
          <circle cx="85" cy="42" r="5" fill="hsla(38, 85%, 65%, 0.8)" className="animate-pulse-sphere" />
        </g>
      </svg>
    );
  }

  // 6. Depletion
  if (svgName === "depletion") {
    if (textLower.includes("prepare") || textLower.includes("wake") || textLower.includes("sensitize") || textLower.includes("activate")) {
      return (
        <svg className="somatic-guide-svg animate-sway" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="18" fill="none" stroke="hsla(200, 85%, 65%, 0.4)" strokeWidth="2.5" className="svg-glow-teal animate-pulse-sphere" />
        </svg>
      );
    }
    return (
      <svg className="somatic-guide-svg" viewBox="0 0 200 200">
        <path stroke="currentColor" strokeWidth="2" fill="none" d="M 40 140 C 40 100, 60 70, 90 70 L 170 70" />
        <path stroke="hsla(200, 85%, 65%, 0.55)" strokeWidth="3" fill="none" d="M 50 65 C 70 85, 110 85, 130 65" className="svg-glow-teal animate-pulse-sphere" />
        <g className="animate-scan-hand">
          <path stroke="currentColor" strokeWidth="2.5" fill="none" d="M 90 35 C 85 38, 85 45, 90 50" />
          <circle cx="85" cy="42" r="5" fill="hsla(200, 85%, 65%, 0.8)" className="animate-pulse-sphere" />
        </g>
      </svg>
    );
  }

  // 7. Disposal Bowl
  if (svgName === "disposal_bowl") {
    return (
      <svg className="somatic-guide-svg" viewBox="0 0 200 200">
        <ellipse cx="100" cy="120" rx="40" ry="12" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M 60 120 C 60 150, 140 150, 140 120" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <ellipse cx="100" cy="124" rx="36" ry="10" fill="hsla(174, 75%, 60%, 0.12)" stroke="hsla(174, 75%, 60%, 0.4)" strokeWidth="1" />
        <g opacity="0.85">
          <circle cx="95" cy="124" r="2" fill="#fff" />
          <circle cx="105" cy="126" r="1.5" fill="#fff" />
          <circle cx="85" cy="125" r="1" fill="#fff" />
          <circle cx="115" cy="125" r="2" fill="#fff" />
        </g>
        <ellipse cx="100" cy="120" rx="55" ry="25" fill="none" stroke="hsla(256, 75%, 70%, 0.25)" strokeWidth="2" strokeDasharray="8,6" className="animate-swirl svg-glow-violet" />
      </svg>
    );
  }

  // 8. Auric Sweeping
  if (svgName === "auric_sweeping") {
    return (
      <svg className="somatic-guide-svg" viewBox="0 0 200 200">
        <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 40 160 C 40 120, 50 60, 50 40 M 110 160 C 110 120, 100 80, 100 70" opacity="0.4" />
        <path stroke="url(#violetGrad)" strokeWidth="2.5" fill="none" d="M 60 50 C 60 70, 70 120, 70 150" className="animate-sweep-stroke" />
        <path stroke="url(#goldGrad)" strokeWidth="2" fill="none" d="M 80 45 C 80 65, 85 110, 85 145" className="animate-sweep-stroke" style={{ animationDelay: "0.5s" }} />
        <g className="animate-sweep-hand">
          <path stroke="currentColor" strokeWidth="2" fill="none" d="M 65 30 C 65 25, 70 25, 75 30 L 70 50 C 70 52, 60 52, 60 50 Z" />
          <circle cx="68" cy="40" r="5" fill="#ffd700" className="svg-glow-gold" />
        </g>
      </svg>
    );
  }

  // 9. Cleansing Cycle (For clinical step combinations)
  if (svgName === "cleansing_cycle") {
    // Flicking hand throwing sparks
    if (textLower.includes("flick") || textLower.includes("flicked")) {
      return (
        <svg className="somatic-guide-svg" viewBox="0 0 200 200">
          <ellipse cx="140" cy="140" rx="25" ry="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 115 140 C 115 160, 165 160, 165 140" stroke="currentColor" strokeWidth="2" fill="none" />
          <g className="animate-flick-hand">
            <path stroke="currentColor" strokeWidth="2" fill="none" d="M 60 40 L 70 70 M 55 45 L 65 75 M 65 42 L 75 72" />
          </g>
          <g className="animate-flick-sparks" opacity="0.9">
            <circle cx="105" cy="90" r="3" fill="#8a2be2" />
            <circle cx="115" cy="105" r="2.5" fill="#40e0d0" />
            <circle cx="125" cy="120" r="2" fill="#ffd700" />
          </g>
        </svg>
      );
    }
    // Hand washing with dripping water
    if (textLower.includes("wash") || textLower.includes("soap") || textLower.includes("water") || textLower.includes("hygiene")) {
      return (
        <svg className="somatic-guide-svg" viewBox="0 0 200 200">
          <g opacity="0.8">
            <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 70 130 C 60 130, 50 115, 50 100 C 50 90, 53 75, 53 65" />
            <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 130 130 C 140 130, 150 115, 150 100 C 150 90, 147 75, 147 65" />
          </g>
          <g className="animate-drips" opacity="0.75">
            <path stroke="#40e0d0" strokeWidth="2" strokeLinecap="round" d="M 85 50 L 85 65 M 115 45 L 115 60 M 100 55 L 100 70" />
            <circle cx="92" cy="78" r="2.5" fill="#40e0d0" />
            <circle cx="108" cy="74" r="2" fill="#40e0d0" />
          </g>
        </svg>
      );
    }
    // Scanning
    if (textLower.includes("scan")) {
      return (
        <svg className="somatic-guide-svg" viewBox="0 0 200 200">
          <path stroke="currentColor" strokeWidth="2" fill="none" d="M 20 100 L 90 100 M 90 85 L 90 115 M 90 85 C 90 85, 110 85, 120 100 C 110 115, 90 115, 90 115" />
          <path stroke="hsla(174, 75%, 60%, 0.35)" strokeWidth="8" fill="none" d="M 50 75 C 75 75, 135 75, 140 100 C 135 125, 75 125, 50 125" className="svg-glow-teal animate-pulse-sphere" />
          <g className="animate-scan-hand">
            <path stroke="currentColor" strokeWidth="2.5" fill="none" d="M 155 85 C 150 85, 145 90, 145 100 C 145 110, 150 115, 155 115" />
            <circle cx="145" cy="100" r="5" fill="#ffd700" className="svg-glow-gold animate-pulse-sphere" />
          </g>
        </svg>
      );
    }
    // General Sweeping (default for cycle)
    return (
      <svg className="somatic-guide-svg" viewBox="0 0 200 200">
        <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 40 160 C 40 120, 50 60, 50 40 M 110 160 C 110 120, 100 80, 100 70" opacity="0.4" />
        <path stroke="url(#violetGrad)" strokeWidth="2.5" fill="none" d="M 60 50 C 60 70, 70 120, 70 150" className="animate-sweep-stroke" />
        <path stroke="url(#goldGrad)" strokeWidth="2" fill="none" d="M 80 45 C 80 65, 85 110, 85 145" className="animate-sweep-stroke" style={{ animationDelay: "0.5s" }} />
        <g className="animate-sweep-hand">
          <path stroke="currentColor" strokeWidth="2" fill="none" d="M 65 30 C 65 25, 70 25, 75 30 L 70 50 C 70 52, 60 52, 60 50 Z" />
          <circle cx="68" cy="40" r="5" fill="#ffd700" className="svg-glow-gold" />
        </g>
      </svg>
    );
  }

  // 10. Drawing Prana
  if (svgName === "drawing_prana") {
    return (
      <svg className="somatic-guide-svg animate-sway" viewBox="0 0 200 200">
        <g className="svg-glow-gold">
          {/* Receptive Palms facing upward */}
          <path stroke="currentColor" strokeWidth="1.8" fill="none" d="M 50 150 C 35 150, 25 135, 25 120 C 25 110, 28 85, 28 75 C 28 70, 32 70, 32 75 C 32 85, 38 90, 38 75 M 150 150 C 165 150, 175 135, 175 120 C 175 110, 172 85, 172 75 C 172 70, 168 70, 168 75 C 168 85, 162 90, 162 75" />
          <circle cx="48" cy="115" r="7" fill="url(#goldGrad)" className="animate-pulse-sphere" />
          <circle cx="152" cy="115" r="7" fill="url(#goldGrad)" className="animate-pulse-sphere" />
        </g>
        {/* Gold Prana currents drawing into palms */}
        <g className="animate-draw-prana" opacity="0.85">
          <circle cx="48" cy="60" r="3.5" fill="#ffd700" className="svg-glow-gold" />
          <circle cx="35" cy="80" r="2.5" fill="#ffd700" className="svg-glow-gold" />
          <circle cx="152" cy="60" r="3.5" fill="#ffd700" className="svg-glow-gold" />
          <circle cx="165" cy="80" r="2.5" fill="#ffd700" className="svg-glow-gold" />
        </g>
      </svg>
    );
  }

  // 11. Projecting Prana
  if (svgName === "projecting_prana") {
    return (
      <svg className="somatic-guide-svg" viewBox="0 0 200 200">
        {/* Receptive Left hand raised up absorbing */}
        <g opacity="0.6">
          <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M 40 140 C 30 140, 25 128, 25 115 C 25 105, 27 80, 27 70 C 27 65, 31 65, 31 70 C 31 80, 36 85, 36 70" />
          <circle cx="32" cy="110" r="5" fill="#ffd700" className="svg-glow-gold animate-pulse-sphere" />
        </g>
        {/* Projecting Right hand facing downward/forward */}
        <g className="svg-glow-violet animate-sway">
          <path stroke="currentColor" strokeWidth="2" fill="none" d="M 120 120 C 135 120, 145 110, 145 95 C 145 85, 142 60, 142 50 C 142 45, 138 45, 138 50 C 138 60, 132 65, 132 50 M 132 50 C 132 45, 128 45, 128 50 M 128 50 C 128 60, 124 60, 124 46" />
          <circle cx="132" cy="90" r="9" fill="url(#violetGrad)" className="animate-pulse-sphere" />
        </g>
        {/* Outward projecting beam of white/gold healing light */}
        <g className="animate-project-prana" opacity="0.9">
          <polygon points="132,95 100,160 164,160" fill="url(#goldGrad)" style={{ mixBlendMode: "screen" }} />
          <circle cx="132" cy="90" r="4" fill="#fff" className="svg-glow-gold" />
        </g>
      </svg>
    );
  }

  // Fallback visual
  return (
    <svg className="somatic-guide-svg animate-sway" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="35" fill="none" stroke="hsla(256, 75%, 70%, 0.18)" strokeWidth="2" className="animate-pulse-sphere" />
    </svg>
  );
};

export const App: React.FC = () => {
  // --- Persistent State Hooks (localStorage) ---
  const [activeTab, setActiveTab] = useState<"masterclass" | "directory">(() => {
    const saved = localStorage.getItem("pranic_active_tab");
    if (saved === "masterclass" || saved === "directory") {
      return saved;
    }
    return "masterclass";
  });

  const [completedChapters, setCompletedChapters] = useState<number[]>(() => {
    const saved = localStorage.getItem("pranic_completed_chapters");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeChapterId, setActiveChapterId] = useState<number | null>(0); // Chapter 1 details expanded by default

  // --- Healing Directory State Hooks ---
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProtocolId, setActiveProtocolId] = useState<string | null>(null);

  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem("pranic_streak");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [lastCompletedDate, setLastCompletedDate] = useState<string>(() => {
    return localStorage.getItem("pranic_last_completed_date") || "";
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("pranic_dark_mode");
    if (saved) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Listen to system color scheme changes in real-time
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("pranic_dark_mode");
      if (saved === null) {
        setDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const [isSourceTextExpanded, setIsSourceTextExpanded] = useState<boolean>(false);

  // --- Somatic Guided Practice Generic Engine Hooks ---
  const [isPracticeActive, setIsPracticeActive] = useState<boolean>(false);
  const [activeStepsList, setActiveStepsList] = useState<SomaticSessionStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(0);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [sessionTitle, setSessionTitle] = useState<string>("");

  // --- Sync State Changes with localStorage ---
  useEffect(() => {
    localStorage.setItem("pranic_active_tab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem("pranic_completed_chapters", JSON.stringify(completedChapters));
  }, [completedChapters]);

  useEffect(() => {
    localStorage.setItem("pranic_streak", streak.toString());
  }, [streak]);

  useEffect(() => {
    localStorage.setItem("pranic_last_completed_date", lastCompletedDate);
  }, [lastCompletedDate]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem("pranic_dark_mode", nextMode.toString());
  };

  // Reset expanded source drawers whenever user changes context
  useEffect(() => {
    setIsSourceTextExpanded(false);
  }, [activeChapterId, activeProtocolId, activeTab]);

  // Web Audio Meditative Silver Bowl Chime Synthesizer
  const playMeditativeChime = () => {
    if (typeof window === "undefined") return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    try {
      const ctx = new AudioContextClass();
      const now = ctx.currentTime;

      // Master gain for the chime decay
      const masterGain = ctx.createGain();
      masterGain.connect(ctx.destination);
      masterGain.gain.setValueAtTime(0, now);
      // Soft 50ms rise to full decay volume
      masterGain.gain.linearRampToValueAtTime(0.35, now + 0.05);
      // Serial exponential fade over 2.5 seconds
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      // C5 primary oscillator
      const oscC5 = ctx.createOscillator();
      oscC5.type = "sine";
      oscC5.frequency.setValueAtTime(523.25, now);
      oscC5.connect(masterGain);

      // G5 perfect-fifth harmonic oscillator
      const oscG5 = ctx.createOscillator();
      oscG5.type = "sine";
      oscG5.frequency.setValueAtTime(783.99, now);
      oscG5.connect(masterGain);

      oscC5.start(now);
      oscG5.start(now);

      oscC5.stop(now + 2.6);
      oscG5.stop(now + 2.6);
    } catch (e) {
      console.warn("Web Audio Context could not start:", e);
    }
  };

  // Speaks the specific Somatic guided vocal script at comfortable 0.70x pace
  const playStepSpeech = (cue: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(cue);
      utterance.rate = 0.70; // Meditatively paced (0.7x slower rate)
      
      // Select premium voice if available
      const allVoices = window.speechSynthesis.getVoices();
      const englishVoices = allVoices.filter((v) => v.lang.startsWith("en"));
      const bestVoice = englishVoices.find((v) => {
        const nameLower = v.name.toLowerCase();
        return nameLower.includes("siri") || nameLower.includes("premium") || nameLower.includes("enhanced") || nameLower.includes("google") || nameLower.includes("natural");
      }) || englishVoices[0];
      
      if (bestVoice) {
        utterance.voice = bestVoice;
        utterance.lang = bestVoice.lang;
      }

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn("Speech synthesis error in Practice Mode:", err);
    }
  };

  // --- Somatic Session Launchers ---

  // 1. Play Full Masterclass (continuous 20-min chain)
  const handleStartFullMasterclass = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    const allSteps: SomaticSessionStep[] = [];
    masterclassChapters.forEach((chapter) => {
      chapter.steps.forEach((step) => {
        allSteps.push({
          text: step.text,
          duration: step.duration,
          audioCue: step.audioCue,
          svgName: chapter.svgName,
          chapterTitle: chapter.title
        });
      });
    });

    if (allSteps.length === 0) return;

    setActiveStepsList(allSteps);
    setSessionTitle("Foundational Somatic Masterclass");
    setCurrentStepIndex(0);
    setTimerSecondsLeft(allSteps[0].duration);
    setIsTimerPaused(false);
    setIsPracticeActive(true);

    playMeditativeChime();
    setTimeout(() => {
      playStepSpeech(allSteps[0].audioCue);
    }, 150);
  };

  // 2. Play Individual Chapter Skill micro-session (3 mins)
  const handleStartChapterPractice = (chapterId: number) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    const chapter = masterclassChapters.find((c) => c.id === chapterId);
    if (!chapter) return;

    const steps: SomaticSessionStep[] = chapter.steps.map((step) => ({
      text: step.text,
      duration: step.duration,
      audioCue: step.audioCue,
      svgName: chapter.svgName,
      chapterTitle: chapter.title
    }));

    setActiveStepsList(steps);
    setSessionTitle(`${chapter.title} Practice`);
    setCurrentStepIndex(0);
    setTimerSecondsLeft(steps[0].duration);
    setIsTimerPaused(false);
    setIsPracticeActive(true);

    playMeditativeChime();
    setTimeout(() => {
      playStepSpeech(steps[0].audioCue);
    }, 150);
  };

  // 3. Play clinical protocol from directory (5 mins)
  const handleStartProtocolPractice = (protocolId: string) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    const protocol = healingDirectory.find((p) => p.id === protocolId);
    if (!protocol) return;

    const steps: SomaticSessionStep[] = protocol.steps.map((step, idx) => ({
      text: step.text,
      duration: step.duration,
      audioCue: step.audioCue,
      svgName: protocol.svgFlow[idx] || "cleansing_cycle",
      chapterTitle: protocol.name
    }));

    setActiveStepsList(steps);
    setSessionTitle(protocol.name);
    setCurrentStepIndex(0);
    setTimerSecondsLeft(steps[0].duration);
    setIsTimerPaused(false);
    setIsPracticeActive(true);

    playMeditativeChime();
    setTimeout(() => {
      playStepSpeech(steps[0].audioCue);
    }, 150);
  };

  const handleUpdateStreak = () => {
    const todayStr = new Date().toISOString().split("T")[0];
    if (lastCompletedDate !== todayStr) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      if (lastCompletedDate === yesterdayStr) {
        setStreak((s) => s + 1);
      } else if (lastCompletedDate === "") {
        setStreak(1);
      } else {
        setStreak(1);
      }
      setLastCompletedDate(todayStr);
    }
  };

  const handleAdvanceStep = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < activeStepsList.length) {
      setCurrentStepIndex(nextIndex);
      const nextStep = activeStepsList[nextIndex];
      setTimerSecondsLeft(nextStep.duration);
      playMeditativeChime();
      playStepSpeech(nextStep.audioCue);
    } else {
      // Completed the entire session!
      playMeditativeChime();
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setIsPracticeActive(false);
      handleUpdateStreak();

      if (sessionTitle === "Foundational Somatic Masterclass") {
        // Mark all chapters completed!
        const allIds = masterclassChapters.map((c) => c.id);
        setCompletedChapters(allIds);
        alert("🎉 Congratulations! You have successfully completed the entire Foundational Somatic Masterclass! Stay grounded and wash your hands.");
      } else if (sessionTitle.endsWith("Practice")) {
        const chapTitle = sessionTitle.replace(" Practice", "");
        const chapter = masterclassChapters.find((c) => c.title === chapTitle);
        if (chapter) {
          if (!completedChapters.includes(chapter.id)) {
            setCompletedChapters((prev) => [...prev, chapter.id]);
          }
          alert(`✨ You have completed physical practice of: ${chapter.title}! Ground yourself and wash your hands.`);
        }
      } else {
        alert(`🌿 Healing Treatment Session completed for: ${sessionTitle}. Wash your hands with cold water and salt to sever any energetic ties.`);
      }
    }
  };

  const handleBackStep = () => {
    if (currentStepIndex > 0) {
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      const prevStep = activeStepsList[prevIndex];
      setTimerSecondsLeft(prevStep.duration);
      playMeditativeChime();
      playStepSpeech(prevStep.audioCue);
    }
  };

  const handleTogglePause = () => {
    setIsTimerPaused((prev) => {
      const nextPaused = !prev;
      if (nextPaused) {
        if (typeof window !== "undefined" && window.speechSynthesis) {
          window.speechSynthesis.pause();
        }
      } else {
        if (typeof window !== "undefined" && window.speechSynthesis) {
          window.speechSynthesis.resume();
        }
      }
      return nextPaused;
    });
  };

  const handleExitPractice = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPracticeActive(false);
  };

  // Timer Countdown loop for active somatic session
  useEffect(() => {
    if (!isPracticeActive || isTimerPaused) return;

    const interval = setInterval(() => {
      setTimerSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAdvanceStep();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPracticeActive, isTimerPaused, currentStepIndex, activeStepsList]);

  // --- Filtering Healing Directory ---
  const filteredProtocols = healingDirectory.filter((protocol) => {
    const matchesSearch = 
      protocol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      protocol.diagnosis.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || protocol.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getModuleClass = (mod: string) => {
    if (mod === "Introduction") return "introduction";
    if (mod === "The Sensor") return "sensor";
    if (mod === "The Scanner") return "scanner";
    if (mod === "The Purifier") return "purifier";
    return "projector";
  };

  return (
    <div className="app-container">
      {/* Meditative Main Header */}
      <header className="nav-header">
        <div className="brand-group">
          <span className="brand-subtitle">Prana Path</span>
          <h1 className="brand-title">Daily Healing</h1>
        </div>
        <div className="header-controls">
          {streak > 0 && (
            <div className="streak-tracker" style={{ margin: 0, padding: "6px 12px", border: "1px solid var(--accent-peace)" }}>
              🔥 <span className="streak-number" style={{ fontSize: "14px", marginLeft: "4px" }}>{streak}</span>
            </div>
          )}
          <button 
            className="btn-icon" 
            onClick={handleToggleDarkMode} 
            aria-label="Toggle Dark Mode"
            title="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Soothing Tabs */}
      <nav className="tab-nav">
        <button 
          className={`tab-btn ${activeTab === "masterclass" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("masterclass");
            setActiveProtocolId(null);
          }}
        >
          The Masterclass Hub
        </button>
        <button 
          className={`tab-btn ${activeTab === "directory" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("directory");
          }}
        >
          The Healing Directory
        </button>
      </nav>

      {/* Main Layout Grid */}
      <div className="main-layout-grid">
        
        {/* --- TAB 1: THE MASTERCLASS HUB --- */}
        {activeTab === "masterclass" && (
          <section className="masterclass-full-column show-column" style={{ width: "100%" }}>
            
            {/* Masterclass Intro & Quick Play Section */}
            <div className="card" style={{ marginBottom: "20px", background: "var(--accent-healing-bg)", border: "1px solid var(--accent-healing-border)" }}>
              <h2 className="lesson-h1" style={{ fontSize: "22px", fontWeight: 800 }}>Foundational Skills Masterclass</h2>
              <p className="lesson-desc" style={{ marginTop: "6px", fontSize: "13.5px" }}>
                Awaken your palm gateways, sensitize your hands, scan bioplasmic fields, and master downward sweeping. You can play the full continuous 20-minute guided session hands-free, or practice specific skill chapters at your convenience.
              </p>
              
              <div style={{ marginTop: "16px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button className="btn-somatic-start" style={{ width: "auto", padding: "12px 24px" }} onClick={handleStartFullMasterclass}>
                  🧘 Play Full Masterclass (20 min)
                </button>
                {completedChapters.length === masterclassChapters.length && (
                  <button 
                    className="btn-secondary" 
                    style={{ background: "transparent", color: "var(--accent-peace)", border: "1px solid var(--accent-peace)" }}
                    onClick={() => {
                      if (window.confirm("Restart course? Your streak will remain saved.")) {
                        setCompletedChapters([]);
                      }
                    }}
                  >
                    Reset Course Progress
                  </button>
                )}
              </div>
            </div>

            {/* Chapters Accordion / List */}
            <div className="syllabus-container">
              {masterclassChapters.map((chapter) => {
                const isCompleted = completedChapters.includes(chapter.id);
                const isExpanded = activeChapterId === chapter.id;

                return (
                  <div 
                    key={chapter.id}
                    className={`syllabus-item ${isCompleted ? "completed" : ""} ${isExpanded ? "active" : ""}`}
                    onClick={() => setActiveChapterId(isExpanded ? null : chapter.id)}
                    style={{ display: "flex", flexDirection: "column", padding: "16px", gap: 0 }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                      <div className="syllabus-left">
                        <div 
                          className="day-circle interactive"
                          title={isCompleted ? "Mark incomplete" : "Mark complete"}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isCompleted) {
                              setCompletedChapters((prev) => prev.filter((id) => id !== chapter.id));
                            } else {
                              setCompletedChapters((prev) => [...prev, chapter.id]);
                              handleUpdateStreak();
                            }
                          }}
                        >
                          {isCompleted ? "✓" : chapter.id}
                        </div>
                        <div className="syllabus-meta">
                          <span className={`module-badge ${getModuleClass(chapter.module)}`} style={{ alignSelf: "flex-start", marginBottom: "4px" }}>
                            {chapter.module}
                          </span>
                          <h4 className="syllabus-day-title" style={{ fontSize: "15px", fontWeight: 700 }}>
                            {chapter.title}
                          </h4>
                        </div>
                      </div>
                      <div className="syllabus-right" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span className="duration-readout" style={{ fontSize: "11px" }}>⏳ {chapter.duration}</span>
                        <span style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>▼</span>
                      </div>
                    </div>

                    {/* Chapter Expanded Details */}
                    {isExpanded && (
                      <div style={{ marginTop: "16px", width: "100%", borderTop: "1px solid var(--bg-tertiary)", paddingTop: "16px" }} onClick={(e) => e.stopPropagation()}>
                        <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "16px" }}>
                          {chapter.description}
                        </p>

                        {/* Interactive hand visualizer helper for Day 1 */}
                        {chapter.id === 1 && (
                          <div style={{ marginBottom: "20px", background: "var(--bg-tertiary)", padding: "16px", borderRadius: "10px" }}>
                            <h5 style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "10px", textAlign: "center" }}>
                              Awakening Palm Gateways (Minor Palm Chakras)
                            </h5>
                            <div className="interactive-palms-container">
                              <div className="palm-visual">
                                <svg className="palm-svg" viewBox="0 0 100 120">
                                  <path className="hand-shape" d="M 50 110 C 30 110, 20 90, 20 70 C 20 60, 25 35, 25 25 C 25 20, 30 20, 30 25 C 30 35, 38 40, 38 20 C 38 15, 43 15, 43 20 C 43 35, 48 35, 48 15 C 48 10, 53 10, 53 15 C 53 35, 58 35, 58 20 C 58 15, 63 15, 63 20 C 63 35, 65 50, 68 55 C 72 60, 78 65, 78 72 C 78 90, 70 110, 50 110 Z" />
                                  <circle className="gateway-node" cx="48" cy="70" r="8" />
                                </svg>
                                <span className="palm-label">Left Gateway</span>
                              </div>
                              <div className="palm-visual">
                                <svg className="palm-svg" viewBox="0 0 100 120" style={{ transform: "scaleX(-1)" }}>
                                  <path className="hand-shape" d="M 50 110 C 30 110, 20 90, 20 70 C 20 60, 25 35, 25 25 C 25 20, 30 20, 30 25 C 30 35, 38 40, 38 20 C 38 15, 43 15, 43 20 C 43 35, 48 35, 48 15 C 48 10, 53 10, 53 15 C 53 35, 58 35, 58 20 C 58 15, 63 15, 63 20 C 63 35, 65 50, 68 55 C 72 60, 78 65, 78 72 C 78 90, 70 110, 50 110 Z" />
                                  <circle className="gateway-node" cx="48" cy="70" r="8" />
                                </svg>
                                <span className="palm-label">Right Gateway</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Concept Text */}
                        <div className="reading-section" style={{ fontSize: "13.5px", lineHeight: "1.6", color: "var(--text-primary)" }}>
                          {chapter.imagePath && (
                            <div className="lesson-illustration-container" style={{ maxHeight: "200px" }}>
                              <img 
                                src={chapter.imagePath.startsWith('/') ? `${import.meta.env.BASE_URL}${chapter.imagePath.substring(1)}` : `${import.meta.env.BASE_URL}${chapter.imagePath}`} 
                                alt={chapter.title} 
                                className="lesson-illustration" 
                              />
                            </div>
                          )}
                          {chapter.concept.map((para, idx) => (
                            <p key={idx} style={{ marginBottom: "12px" }}>{para}</p>
                          ))}
                        </div>

                        {/* Verbatim Textbook Passage Drawer */}
                        <div className="source-drawer-container" style={{ margin: "16px 0" }}>
                          <button 
                            className={`btn-source-toggle ${isSourceTextExpanded ? 'active' : ''}`}
                            onClick={() => setIsSourceTextExpanded(!isSourceTextExpanded)}
                            style={{ padding: "10px 14px", fontSize: "12.5px" }}
                          >
                            📖 {isSourceTextExpanded ? "Hide Verbatim Textbook Evidence" : "Read Verbatim Textbook Evidence"}
                          </button>
                          {isSourceTextExpanded && (
                            <div className="source-parchment-drawer" style={{ padding: "16px", borderRadius: "10px", marginTop: "8px" }}>
                              <h5 className="source-chapter-title" style={{ fontSize: "13px", fontWeight: 700 }}>
                                {chapter.sourceText.chapter} • <span style={{ color: "var(--accent-peace)" }}>{chapter.sourceText.section}</span>
                              </h5>
                              <div className="source-passage-content" style={{ fontSize: "12.5px", fontStyle: "italic", margin: "10px 0", borderLeft: "2px solid var(--accent-peace)", paddingLeft: "10px" }}>
                                {chapter.sourceText.passages.map((pass, pIdx) => (
                                  <p key={pIdx} style={{ marginBottom: "8px", lineHeight: "1.5" }}>“{pass}”</p>
                                ))}
                              </div>
                              <div style={{ marginTop: "10px", fontSize: "11px", color: "var(--text-secondary)", borderTop: "1px dashed var(--bg-tertiary)", paddingTop: "8px" }}>
                                💡 <strong>Authenticity Check:</strong> {chapter.sourceText.evidenceNote}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Somatic Steps Preview & Micro-Practice Button */}
                        <div style={{ background: "var(--bg-secondary)", padding: "16px", borderRadius: "12px", border: "1px solid var(--bg-tertiary)" }}>
                          <h4 style={{ fontSize: "13px", fontWeight: 800, marginBottom: "12px" }}>Somatic Session Steps ({chapter.exerciseTitle})</h4>
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                            {chapter.steps.map((step, sIdx) => (
                              <div key={sIdx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--bg-tertiary)", padding: "8px 12px", borderRadius: "8px", fontSize: "12.5px" }}>
                                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                  <span style={{ color: "var(--accent-peace)", fontWeight: 700 }}>{sIdx + 1}</span>
                                  <span style={{ color: "var(--text-primary)" }}>{step.text}</span>
                                </div>
                                <span style={{ fontSize: "11px", color: "var(--text-secondary)", fontWeight: 600 }}>{step.duration}s</span>
                              </div>
                            ))}
                          </div>
                          <button className="btn-somatic-start" style={{ padding: "10px 16px", fontSize: "13px" }} onClick={() => handleStartChapterPractice(chapter.id)}>
                            🧘 Practice This Chapter (Micro-Session)
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* --- TAB 2: THE HEALING DIRECTORY --- */}
        {activeTab === "directory" && (
          <section className="directory-full-column show-column" style={{ width: "100%" }}>
            
            {/* Search and Filters Hub */}
            <div className="card" style={{ marginBottom: "20px", padding: "16px" }}>
              <h2 className="lesson-h1" style={{ fontSize: "20px", fontWeight: 800, marginBottom: "4px" }}>First-Aid Reference Directory</h2>
              <p className="lesson-desc" style={{ fontSize: "13px", marginBottom: "16px" }}>
                Look up physical ailments to load tailored self-treatment recipes derived directly from the textbook *Miracles Through Pranic Healing*.
              </p>

              {/* Search input */}
              <div style={{ position: "relative", marginBottom: "12px" }}>
                <input 
                  type="text" 
                  className="search-input"
                  placeholder="🔍 Search ailments (e.g. Headache, fatigue, stomach)..." 
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setActiveProtocolId(null);
                  }}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--bg-tertiary)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    outline: "none"
                  }}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontSize: "14px" }}
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Category chips list */}
              <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
                {["All", "General", "Nervous", "Musculoskeletal", "Gastrointestinal"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setActiveProtocolId(null);
                    }}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: 600,
                      cursor: "pointer",
                      border: "1px solid " + (selectedCategory === cat ? "var(--accent-peace)" : "var(--bg-tertiary)"),
                      background: selectedCategory === cat ? "var(--accent-peace-bg)" : "var(--bg-tertiary)",
                      color: selectedCategory === cat ? "var(--accent-peace)" : "var(--text-secondary)",
                      transition: "all 0.2s ease",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Ailments Results Grid / Protocol detail */}
            {activeProtocolId === null ? (
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
                {filteredProtocols.length > 0 ? (
                  filteredProtocols.map((protocol) => (
                    <div 
                      key={protocol.id} 
                      className="card syllabus-item" 
                      onClick={() => setActiveProtocolId(protocol.id)}
                      style={{ padding: "16px", cursor: "pointer", display: "flex", flexDirection: "column", gap: "8px", border: "1px solid var(--bg-tertiary)" }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-peace)", background: "var(--accent-peace-bg)", padding: "4px 8px", borderRadius: "6px" }}>
                          {protocol.category} Protocol
                        </span>
                        <span style={{ fontSize: "11px", color: "var(--text-secondary)" }}>⏳ {protocol.duration}</span>
                      </div>
                      <h3 style={{ fontSize: "16px", fontWeight: 800, color: "var(--text-primary)" }}>{protocol.name}</h3>
                      <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                        {protocol.diagnosis.substring(0, 100)}...
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "6px", borderTop: "1px dashed var(--bg-tertiary)", paddingTop: "8px" }}>
                        <span style={{ fontSize: "11px", color: "var(--accent-healing)" }}>📖 GMCKS Certified Source</span>
                        <span style={{ fontSize: "12px", color: "var(--accent-peace)", fontWeight: 600 }}>View treatment plan →</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ textAlign: "center", padding: "32px", color: "var(--text-secondary)" }}>
                    <span>📭</span>
                    <p style={{ fontSize: "13px", marginTop: "6px" }}>No treatment protocols match your criteria.</p>
                  </div>
                )}
              </div>
            ) : (
              // Protocol Detail Screen
              (() => {
                const protocol = healingDirectory.find((p) => p.id === activeProtocolId);
                if (!protocol) return null;

                return (
                  <div className="card" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                    {/* Back Button */}
                    <button 
                      onClick={() => setActiveProtocolId(null)}
                      style={{ alignSelf: "flex-start", background: "none", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}
                    >
                      ← Back to Ailments Catalog
                    </button>

                    <div style={{ borderBottom: "1px solid var(--bg-tertiary)", paddingBottom: "12px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-peace)", background: "var(--accent-peace-bg)", padding: "4px 8px", borderRadius: "6px" }}>
                        {protocol.category} • Treatment Recipe
                      </span>
                      <h2 className="lesson-h1" style={{ fontSize: "22px", fontWeight: 800, marginTop: "8px" }}>{protocol.name}</h2>
                      <span className="duration-readout" style={{ alignSelf: "flex-start", marginTop: "4px", display: "inline-block" }}>⏳ Total Duration: {protocol.duration}</span>
                    </div>

                    {/* Energetic Diagnosis block */}
                    <div>
                      <h4 style={{ fontSize: "13px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "4px" }}>Energetic Diagnosis (Book Context):</h4>
                      <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                        {protocol.diagnosis}
                      </p>
                    </div>

                    {/* Verbatim Textbook Passages evidence drawer */}
                    <div className="source-drawer-container">
                      <button 
                        className={`btn-source-toggle ${isSourceTextExpanded ? 'active' : ''}`}
                        onClick={() => setIsSourceTextExpanded(!isSourceTextExpanded)}
                        style={{ padding: "8px 12px", fontSize: "12px" }}
                      >
                        📖 {isSourceTextExpanded ? "Hide Verbatim Book Citation" : "Read Verbatim Book Citation"}
                      </button>
                      {isSourceTextExpanded && (
                        <div className="source-parchment-drawer" style={{ padding: "16px", borderRadius: "10px", marginTop: "8px" }}>
                          <h5 className="source-chapter-title" style={{ fontSize: "12.5px", fontWeight: 700 }}>
                            {protocol.sourceText.chapter} • <span style={{ color: "var(--accent-peace)" }}>{protocol.sourceText.section}</span>
                          </h5>
                          <div className="source-passage-content" style={{ fontSize: "12.5px", fontStyle: "italic", margin: "8px 0", borderLeft: "2px solid var(--accent-peace)", paddingLeft: "10px" }}>
                            {protocol.sourceText.passages.map((pass, idx) => (
                              <p key={idx} style={{ marginBottom: "6px", lineHeight: "1.4" }}>“{pass}”</p>
                            ))}
                          </div>
                          <div style={{ marginTop: "8px", fontSize: "11px", color: "var(--text-secondary)", borderTop: "1px dashed var(--bg-tertiary)", paddingTop: "6px" }}>
                            💡 <strong>Authenticity Evidence:</strong> {protocol.sourceText.evidenceNote}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Steps Checklist */}
                    <div style={{ background: "var(--bg-secondary)", padding: "16px", borderRadius: "12px", border: "1px solid var(--bg-tertiary)" }}>
                      <h4 style={{ fontSize: "13px", fontWeight: 800, marginBottom: "12px" }}>Treatment Steps Recipe</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                        {protocol.steps.map((step, idx) => (
                          <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--bg-tertiary)", padding: "10px 14px", borderRadius: "8px", fontSize: "12.5px" }}>
                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                              <span style={{ color: "var(--accent-peace)", fontWeight: 700 }}>{idx + 1}</span>
                              <span style={{ color: "var(--text-primary)" }}>{step.text}</span>
                            </div>
                            <span style={{ fontSize: "11px", color: "var(--text-secondary)", fontWeight: 600 }}>{step.duration}s</span>
                          </div>
                        ))}
                      </div>

                      {/* Start Session Action */}
                      <button className="btn-somatic-start" onClick={() => handleStartProtocolPractice(protocol.id)}>
                        ⚡ Start Guided Treatment Session
                      </button>
                    </div>
                  </div>
                );
              })()
            )}
          </section>
        )}

      </div>

      {/* Muted Footer */}
      <footer className="app-footer">
        <p>Inspired by the teachings of Grand Master Choa Kok Sui</p>
        <p style={{ opacity: 0.5, marginTop: "2px" }}>Prana Path masterclass core</p>
      </footer>

      {/* Immersive Somatic Practice Portal Overlay */}
      {isPracticeActive && (
        <div className="somatic-practice-portal">
          <header className="somatic-header">
            <span className="somatic-day-tag">{sessionTitle}</span>
            <button className="somatic-close-btn" onClick={handleExitPractice}>✕ Exit Practice</button>
          </header>

          <main className="somatic-main-stage">
            {/* Hidden Gradients Defs SVG */}
            <svg style={{ position: "absolute", width: 0, height: 0 }}>
              <defs>
                <linearGradient id="violetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsla(256, 75%, 70%, 0.85)" />
                  <stop offset="100%" stopColor="hsla(280, 75%, 60%, 0.1)" />
                </linearGradient>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsla(38, 85%, 65%, 0.9)" />
                  <stop offset="100%" stopColor="hsla(20, 85%, 55%, 0.15)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Elegant minimalist timer display above the figure */}
            <div className="somatic-timer-display">
              {timerSecondsLeft}s
            </div>

            {/* Dynamic Step-Specific Somatic Visual Guide */}
            <div className="somatic-guide-wrapper">
              {/* The circular breathing aura centered behind the figure */}
              <div className="pulse-breathing-ring"></div>
              <SomaticVisuals 
                svgName={activeStepsList[currentStepIndex]?.svgName || "setup"} 
                stepIndex={currentStepIndex}
                stepText={activeStepsList[currentStepIndex]?.text || ""} 
              />
            </div>

            <div className="somatic-step-card">
              <span className="somatic-step-pill">
                {activeStepsList[currentStepIndex]?.chapterTitle && (
                  <strong style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--accent-peace)", marginBottom: "4px" }}>
                    {activeStepsList[currentStepIndex]?.chapterTitle}
                  </strong>
                )}
                Step {currentStepIndex + 1} of {activeStepsList.length}
              </span>
              <h3 className="somatic-instruction">
                {activeStepsList[currentStepIndex]?.text}
              </h3>
            </div>
          </main>

          <footer className="somatic-controls">
            <div className="somatic-btn-row">
              <button 
                className="btn-somatic-round" 
                onClick={handleBackStep}
                disabled={currentStepIndex === 0}
                title="Back step"
                aria-label="Previous step"
              >
                ⏮️
              </button>
              
              <button 
                className="btn-somatic-round btn-somatic-play" 
                onClick={handleTogglePause}
                title={isTimerPaused ? "Resume Session" : "Pause Session"}
                aria-label={isTimerPaused ? "Resume Session" : "Pause Session"}
              >
                {isTimerPaused ? "▶️" : "⏸️"}
              </button>

              <button 
                className="btn-somatic-round" 
                onClick={handleAdvanceStep}
                title="Skip step"
                aria-label="Skip step"
              >
                ⏭️
              </button>
            </div>

            <div className="somatic-steps-dots">
              {activeStepsList.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`somatic-dot ${idx === currentStepIndex ? "active" : idx < currentStepIndex ? "completed" : ""}`}
                />
              ))}
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
