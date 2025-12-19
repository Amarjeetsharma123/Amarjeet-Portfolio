"use client";
import React from "react";

// Pure CSS Aurora Background - Maximum Performance
// Uses only CSS animations, no JavaScript at all
export const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#030014] overflow-hidden">
            {/* Aurora layers - pure CSS animations */}
            <div className="aurora-container">
                <div className="aurora aurora-1" />
                <div className="aurora aurora-2" />
                <div className="aurora aurora-3" />
            </div>

            {/* Static grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '100px 100px',
                }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
        </div>
    );
};
