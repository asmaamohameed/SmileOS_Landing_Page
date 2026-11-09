"use client";

import { X } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { videoEmbed, videos, type VideoKey } from "@/config/videos";
import type { Dictionary } from "@/i18n";

const WatchContext = createContext<(key: string) => void>(() => {});

export function useWatch() {
  return useContext(WatchContext);
}

export function VideoProvider({
  copy,
  children,
}: {
  copy: Dictionary["videos"] & { close: string };
  children: React.ReactNode;
}) {
  const [key, setKey] = useState<VideoKey | null>(null);
  const [ready, setReady] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const open = (next: string) => {
    if (!videos.some((video) => video.key === next)) return;
    lastFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setKey(next as VideoKey);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !key) return;
    if (!dialog.open) dialog.showModal();
    setReady(true);
  }, [key]);

  const close = () => dialogRef.current?.close();
  const video = videos.find((item) => item.key === key);
  const title = key ? copy.items[key].title : "";

  return (
    <WatchContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        className="player"
        aria-labelledby="video-title"
        onClose={() => {
          setKey(null);
          setReady(false);
          lastFocus.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        {key && video ? (
          <div>
            <div className="mb-3 flex items-start justify-between gap-3">
              <h2 id="video-title" className="text-lg font-bold text-navy">
                {title}
              </h2>
              <button type="button" className="rounded-lg p-1 text-navy" aria-label={copy.close} onClick={close}>
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="aspect-video overflow-hidden rounded-[10px] bg-navy">
              {ready ? (
                <iframe
                  src={videoEmbed(video)}
                  title={title}
                  className="h-full w-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : null}
            </div>
          </div>
        ) : null}
      </dialog>
    </WatchContext.Provider>
  );
}
