import { ArrowLeft, Camera } from "phosphor-react";
import { useState } from "react";
import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../Index";
import { ScreenshotButton } from "../ScreenshotButtonm";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequest,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot ] = useState<string | null>(null);

  const FeedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          onClick={onFeedbackRestartRequest}
          type="button"
          className="top-7 left-8 absolute"
        >
          <ArrowLeft weight="bold" className="w-4 h-4 " />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={FeedbackTypeInfo.image.source}
            alt={FeedbackTypeInfo.image.alt}
          />
          {FeedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] texto-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-violet-600 focus:ring-violet-600 focus:ring-1 resize-none "
          placeholder="Conte com detalhes o que está acontecendo..."
        />
      </form>

      <footer className="flex gap-2 mt-2">

        <ScreenshotButton
        Screenshot={screenshot}
        OnScreenshotTook={setScreenshot}
        />

        <button
          type="submit"
          className="p-2 bg-violet-900 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover: bg-violet-400 focus:outline-none"
        >
          Enviar Feedback
        </button>
      </footer>
    </>
  );
}
