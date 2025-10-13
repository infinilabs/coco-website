import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface Screenshot {
  url: string;
  title?: string;
}

interface ImagePreviewModalProps {
  isOpen: boolean;
  screenshots: Screenshot[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onIndexChange: (index: number) => void;
}

export default function ImagePreviewModal({
  isOpen,
  screenshots,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  onIndexChange,
}: ImagePreviewModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrevious();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen || !screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 overflow-hidden">
      <div className="relative w-full h-full box-border flex items-center justify-center p-3 sm:p-6 overflow-hidden overscroll-none">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-3 sm:p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {screenshots.length > 1 && (
          <button
            onClick={onPrevious}
            className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-4 z-10 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
          >
            <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>
        )}

        <div className="w-full h-full max-w-full sm:max-w-4xl max-h-[80vh] sm:max-h-[85vh] flex items-center justify-center px-0 sm:px-4 py-0 sm:py-2 overflow-hidden min-w-0">
          <Image
            src={screenshots[currentIndex].url}
            alt={
              screenshots[currentIndex].title ||
              `Screenshot ${currentIndex + 1}`
            }
            width={800}
            height={600}
            sizes="100vw"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>

        {screenshots.length > 1 && (
          <button
            onClick={onNext}
            className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 z-10 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
          >
            <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>
        )}

        {screenshots.length > 1 && (
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => onIndexChange(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}