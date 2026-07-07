import React from "react";

export function CropMarks() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-20">
      {/* Top Left */}
      <div className="absolute top-4 left-4 w-6 h-6">
        <div className="absolute top-0 left-3 w-[1px] h-6 bg-secondary-text/20" />
        <div className="absolute top-3 left-0 w-6 h-[1px] bg-secondary-text/20" />
      </div>
      {/* Top Right */}
      <div className="absolute top-4 right-4 w-6 h-6">
        <div className="absolute top-0 right-3 w-[1px] h-6 bg-secondary-text/20" />
        <div className="absolute top-3 right-0 w-6 h-[1px] bg-secondary-text/20" />
      </div>
      {/* Bottom Left */}
      <div className="absolute bottom-4 left-4 w-6 h-6">
        <div className="absolute bottom-0 left-3 w-[1px] h-6 bg-secondary-text/20" />
        <div className="absolute bottom-3 left-0 w-6 h-[1px] bg-secondary-text/20" />
      </div>
      {/* Bottom Right */}
      <div className="absolute bottom-4 right-4 w-6 h-6">
        <div className="absolute bottom-0 right-3 w-[1px] h-6 bg-secondary-text/20" />
        <div className="absolute bottom-3 right-0 w-6 h-[1px] bg-secondary-text/20" />
      </div>
    </div>
  );
}

export function RegistrationMark({ className = "" }: { className?: string }) {
  return (
    <div className={`w-8 h-8 rounded-full border border-secondary-text/15 relative flex items-center justify-center pointer-events-none select-none opacity-30 z-20 ${className}`}>
      <div className="w-4 h-4 rounded-full border border-secondary-text/15" />
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-secondary-text/15 -translate-x-1/2" />
      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-secondary-text/15 -translate-y-1/2" />
    </div>
  );
}
