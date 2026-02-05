"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import EmptyState from "@/components/views/EmptyState";
import DashboardView from "@/components/views/DashboardView";
import BrowseView from "@/components/views/BrowseView";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [hasUploaded, setHasUploaded] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex flex-1 flex-col min-w-0">
        <TopBar />

        <main className="flex-1 overflow-hidden">
          {activeTab === "dashboard" && (
            hasUploaded ? (
              <DashboardView />
            ) : (
              <EmptyState onUpload={() => setHasUploaded(true)} />
            )
          )}

          {activeTab === "browse" && <BrowseView />}

          {["receipts", "subscriptions", "warranties"].includes(activeTab) && (
            <div className="flex h-full items-center justify-center text-gray-400">
              Work in progress
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
