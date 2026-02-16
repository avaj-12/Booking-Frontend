import { StrictMode, useState } from "react"
import { createRoot } from "react-dom/client"
import React from "react"
import "./index.css"

import { Calendar } from "@/components/ui/calendar"

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-10">
      <h1 className="text-md">Hello</h1>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />

      <p>Selected: {date?.toDateString()}</p>
    </div>
  )
}
export default App;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
