"use client";

import { useState } from "react";
import { Document } from "@/lib/api-client";

interface ReviewModalProps {
    document: Document;
    onClose: () => void;
    onSubmit: (docId: string, note: string) => Promise<void>;
}

const MAX_NOTE_LENGTH = 500;

export default function ReviewModal({ document, onClose, onSubmit }: ReviewModalProps) {
    const [note, setNote] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (skipNote: boolean = false) => {
        setIsSubmitting(true);
        setError(null);
        try {
            await onSubmit(document.id, skipNote ? "" : note);
            onClose();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to submit review");
            setIsSubmitting(false);
        }
    };

    const charsRemaining = MAX_NOTE_LENGTH - note.length;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            {/* Close Button */}
            <button
                onClick={onClose}
                disabled={isSubmitting}
                className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors duration-200 disabled:opacity-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Content Container */}
            <div className="flex h-full w-full max-w-5xl gap-6 p-6">
                {/* Image Preview */}
                <div className="flex-1 flex items-center justify-center overflow-hidden rounded-2xl bg-black/50">
                    <img
                        src={document.fileUrl}
                        alt={document.primaryEntity}
                        className="max-h-[85vh] max-w-full object-contain shadow-2xl"
                    />
                </div>

                {/* Review Panel */}
                <div className="w-96 flex flex-col gap-6 rounded-2xl bg-bg-secondary border border-bg-tertiary/50 p-6">
                    {/* Header */}
                    <div>
                        <div className="inline-flex items-center rounded-md bg-warning/10 px-2 py-1 text-xs font-bold text-warning uppercase tracking-wide mb-2">
                            Needs Review
                        </div>
                        <h2 className="text-display font-semibold text-fg-primary tracking-heading">
                            Add Document Description
                        </h2>
                        <p className="mt-2 text-sm text-fg-secondary">
                            OCR couldn&apos;t read this document. Add a description to help with search and organization.
                        </p>
                    </div>

                    <div className="h-px bg-bg-tertiary"></div>

                    {/* Note Input */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="note" className="text-xs font-bold text-fg-tertiary uppercase tracking-wider">
                            Description (optional)
                        </label>
                        <textarea
                            id="note"
                            value={note}
                            onChange={(e) => setNote(e.target.value.slice(0, MAX_NOTE_LENGTH))}
                            placeholder="e.g., Walmart receipt $50 groceries, Birthday party invite March 15..."
                            disabled={isSubmitting}
                            className="w-full h-32 px-3 py-2 rounded-lg bg-bg-primary border border-bg-tertiary text-fg-primary placeholder:text-fg-tertiary resize-none focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                        />
                        <div className="flex justify-between text-xs text-fg-tertiary">
                            <span>
                                {charsRemaining < 50 && (
                                    <span className={charsRemaining < 20 ? "text-warning" : ""}>
                                        {charsRemaining} characters remaining
                                    </span>
                                )}
                            </span>
                            <span>{note.length}/{MAX_NOTE_LENGTH}</span>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="rounded-lg bg-error/10 border border-error/20 px-3 py-2 text-sm text-error">
                            {error}
                        </div>
                    )}

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => handleSubmit(false)}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 rounded-xl bg-accent text-accent-fg font-medium hover:bg-accent-hover transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-accent-fg border-t-transparent rounded-full animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                "Submit Review"
                            )}
                        </button>
                        <button
                            onClick={() => handleSubmit(true)}
                            disabled={isSubmitting}
                            className="w-full px-4 py-2 rounded-xl bg-bg-tertiary text-fg-secondary font-medium hover:bg-bg-tertiary/80 transition-colors disabled:opacity-50"
                        >
                            Skip (Mark as Reviewed)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
