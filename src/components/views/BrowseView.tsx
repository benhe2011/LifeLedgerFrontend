import DocumentCard from "../ui/DocumentCard";

export default function BrowseView() {
    // Placeholder data for the browse grid
    const recentUploads = [
        {
            title: "Nike Store Receipt",
            subtitle: "Uploaded 2 mins ago",
            status: "Processing",
            badgeText: "Receipt",
        },
        {
            title: "Utility Bill - Jan",
            subtitle: "Uploaded 1 hour ago",
            status: "Analyzed",
            badgeText: "Invoice",
        },
        {
            title: "Lease Agreement",
            subtitle: "Uploaded Yesterday",
            status: "Done",
            badgeText: "Contract",
        },
        {
            title: "Car Insurance",
            subtitle: "Uploaded 2 days ago",
            status: "Done",
            badgeText: "Policy",
        },
    ];

    return (
        <div className="flex h-full flex-col p-8 overflow-y-auto">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Browse Documents</h1>
                <p className="text-gray-500">Upload and manage your life admin documents.</p>
            </header>

            {/* Upload Area */}
            <section className="mb-10">
                <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-10 text-center transition-colors hover:border-blue-400 hover:bg-blue-50">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Upload new documents</h3>
                    <p className="mt-1 text-gray-500">Drag and drop files here, or click to select files</p>
                    <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                        Select Files
                    </button>
                </div>
            </section>

            {/* Recent Uploads Grid */}
            <section>
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900">Recent Uploads</h2>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {recentUploads.map((doc, idx) => (
                        <DocumentCard key={idx} {...doc} />
                    ))}
                    {/* Add some placeholders to fill grid */}
                    {[1, 2, 3, 4].map((i) => (
                        <div key={`param-${i}`} className="flex flex-col gap-3 p-4 rounded-xl border border-gray-200 bg-white shadow-sm opacity-60">
                            <div className="h-32 w-full rounded-lg bg-gray-100 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Preview</span>
                            </div>
                            <div className="h-4 w-3/4 rounded bg-gray-100"></div>
                            <div className="h-3 w-1/2 rounded bg-gray-100"></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
