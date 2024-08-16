'use client'

import React, { useRef, useState } from 'react';

export interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    playOnHoverMode?: boolean
}

export function Video({ playOnHoverMode = false, ...props }: VideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showControls, setShowControls] = useState(false)

    const handlePlayOnHover = (play: boolean) => {

        if (playOnHoverMode) {
            const videoElement = videoRef.current;
            if (!videoElement) return

            if (play) videoElement.play() 
                else videoElement.pause()
        }

        if (props.controls) return setShowControls(true)

    }

    return <video controls={showControls}
        onMouseEnter={() => handlePlayOnHover(true)}
        onMouseLeave={() => handlePlayOnHover(false)}
        onEnded={() => handlePlayOnHover(false)}
        ref={videoRef} {...props}></video>;
}
