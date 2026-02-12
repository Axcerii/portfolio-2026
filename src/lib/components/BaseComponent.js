"use client";

import React from "react";

export default function BaseComponent({ className = "", ...props }) {
    return (
        <div className={className} {...props}>
        </div>
    );
}
