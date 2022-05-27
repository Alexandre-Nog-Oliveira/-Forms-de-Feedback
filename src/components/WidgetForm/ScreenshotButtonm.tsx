import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./loading";
import html2canvas from "html2canvas";

interface ScreenshotButtonProps {
    Screenshot: (screenshot: false) => void
  OnScreenshotTook: (screenshot: string) => void;
}

export function ScreenshotButton({ Screenshot, OnScreenshotTook }: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    OnScreenshotTook(base64image);

    setIsTakingScreenshot(false);
  }

if(Screenshot!){
    return(
        <button type="button" className="p1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors " >
            <Trash weight="fill" />
        </button>
    );
}

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors "
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
